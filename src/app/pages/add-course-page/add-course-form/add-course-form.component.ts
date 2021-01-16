import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/common/course.model';
import { CoursesService } from 'src/app/common/services/courses.service';
import { Subscription } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import { selectAuthors } from 'src/app/store/selectors/authors.selectors';
import { loadAuthors } from 'src/app/store/actions/authors.actions';

@Component({
	selector: 'app-add-course-form',
	templateUrl: './add-course-form.component.html',
	styleUrls: ['./add-course-form.component.less'],
})
export class AddCourseFormComponent implements OnInit, OnDestroy {
	public course: Course;
	public isAddPage: boolean;
	public authors$ = this.store.select(selectAuthors);
	private subscribtions: Subscription[] = [];

	constructor(
		private route: ActivatedRoute,
		private store: Store,
		private courseService: CoursesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.store.dispatch(loadAuthors());
		this.route.paramMap.subscribe((routeParams) => {
			const id = parseInt(routeParams.get('id'), 10);
			const newCourse = new Course(null, '', '', 0, '', false, []);
			this.course = newCourse;
			if (isNaN(id)) {
				this.isAddPage = true;
			} else {
				this.subscribtions.push(
					this.courseService.getById(id).subscribe(
						(data) => {
							this.course = data;
							this.isAddPage = false;
						},
						(error) => {
							console.log(
								'cannot find course. probably a new course should be here',
								error
							);
							this.course = newCourse;
							this.isAddPage = true;
						}
					)
				);
			}
		});
	}

	public removeAuthor(event): void {
		const index = this.course.authors.indexOf(event);

		if (index >= 0) {
			this.course.authors.splice(index, 1);
		}
	}

	public onDurationChange(value: string): void {
		this.course.length = parseInt(value, 10);
	}

	public onSave(): void {
		if (this.isAddPage) {
			this.subscribtions.push(
				this.courseService.create(this.course).subscribe(() => {
					this.router.navigateByUrl('courses');
				})
			);
		} else {
			this.subscribtions.push(
				this.courseService.update(this.course).subscribe(() => {
					this.router.navigateByUrl('courses');
				})
			);
		}
	}

	public onCancel(): void {
		this.router.navigateByUrl('/courses');
	}

	public selectAuthor($event: MatAutocompleteSelectedEvent): void {
		this.course.authors.push($event.option.value);
	}

	ngOnDestroy(): void {
		this.subscribtions.forEach((subscribtion) => {
			subscribtion.unsubscribe();
		});
	}
}
