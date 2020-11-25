import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/common/course.model';
import { CoursesService } from 'src/app/common/services/courses.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
	selector: 'app-add-course-form',
	templateUrl: './add-course-form.component.html',
	styleUrls: ['./add-course-form.component.less'],
})
export class AddCourseFormComponent implements OnInit {
	public course: Course;
	private isAddPage: boolean;

	constructor(
		private route: ActivatedRoute,
		private courseService: CoursesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((routeParams) => {
			const id = parseInt(routeParams.get('id'), 10);
			const newCourse = new Course(new Date().getTime(), '', '', 0, '', false, []);
			if (isNaN(id)) {
				this.course = newCourse;
				this.isAddPage = true;
			} else {
				const courseFromService = this.courseService.getById(id);
				this.course = courseFromService ? courseFromService : newCourse;
				this.isAddPage = !courseFromService;
			}
		});
	}

	public addAuthor(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;

		// Add the value to the list
		if ((value || '').trim()) {
			this.course.authors.push(value.trim());
		}

		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	public removeAuthor(event): void {
		console.log('remove author', event);
		const index = this.course.authors.indexOf(event);

		if (index >= 0) {
			this.course.authors.splice(index, 1);
		}
	}

	public onDurationChange(value: string): void {
		this.course.duration = parseInt(value, 10);
	}

	public onSave(): void {
		if (this.isAddPage) {
			this.courseService.create(this.course);
		} else {
			this.courseService.update(this.course);
		}
		this.router.navigateByUrl('/courses');
	}

	public onCancel(): void {
		this.router.navigateByUrl('/courses');
	}
}
