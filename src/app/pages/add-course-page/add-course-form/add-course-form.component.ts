import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/common/course.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import { selectAuthors } from 'src/app/store/selectors/authors.selectors';
import { loadAuthors } from 'src/app/store/actions/authors.actions';
import {
	loadCourse,
	saveCourse,
	setCourse,
} from 'src/app/store/actions/course.actions';
import {
	selectCourse,
	selectIsAddCoursePage,
} from 'src/app/store/selectors/course.selectors';
import {
	AbstractControl,
	FormArray,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { dateValidator, durationValidator } from './add-course-form.validators';

@Component({
	selector: 'app-add-course-form',
	templateUrl: './add-course-form.component.html',
	styleUrls: ['./add-course-form.component.less'],
})
export class AddCourseFormComponent implements OnInit, OnDestroy {
	public course$ = this.store.select(selectCourse);
	public isAddPage$ = this.store.select(selectIsAddCoursePage);
	public authors$ = this.store.select(selectAuthors);
	public courseForm = new FormGroup({
		id: new FormControl(''),
		title: new FormControl('', Validators.maxLength(50)),
		description: new FormControl('', Validators.maxLength(500)),
		date: new FormControl('', dateValidator()),
		duration: new FormControl(0, durationValidator()),
		authors: new FormArray([]),
	});

	constructor(
		private route: ActivatedRoute,
		private store: Store,
		private router: Router
	) {}

	ngOnInit(): void {
		this.store.dispatch(loadAuthors());
		this.store.dispatch(setCourse(new Course(null, '', '', 0, '', false, [])));
		this.route.paramMap.subscribe((routeParams) => {
			const id = parseInt(routeParams.get('id'), 10);
			if (!isNaN(id)) {
				this.store.dispatch(loadCourse({ id }));
			}
		});
		this.course$.subscribe((course) => {
			this.courseForm.setValue({
				id: course.id,
				title: course.name,
				description: course.description,
				date: course.date.substring(0, 10),
				duration: course.length,
				authors: [],
			});
			const authors = (course.authors || []).map(
				(author) => new FormControl(author)
			);
			this.courseForm.setControl('authors', new FormArray(authors));
		});
	}

	public onSave(): void {
		const formValue = this.courseForm.value;
		this.store.dispatch(
			saveCourse({
				id: formValue.id,
				name: formValue.title,
				date: formValue.date,
				length: formValue.duration,
				description: formValue.description,
				authors: formValue.authors,
			} as Course)
		);
	}

	public onCancel(): void {
		this.router.navigateByUrl('/courses');
	}

	public selectAuthor($event: MatAutocompleteSelectedEvent): void {
		this.authors.push(new FormControl($event.option.value));
	}

	public removeAuthor(index): void {
		this.authors.removeAt(index);
	}

	ngOnDestroy(): void {}

	get title(): AbstractControl {
		return this.courseForm.get('title');
	}
	get description(): AbstractControl {
		return this.courseForm.get('description');
	}
	get date(): AbstractControl {
		return this.courseForm.get('date');
	}
	get duration(): AbstractControl {
		return this.courseForm.get('duration');
	}
	get authors(): FormArray {
		return this.courseForm.get('authors') as FormArray;
	}
}
