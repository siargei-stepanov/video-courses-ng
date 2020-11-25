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

	constructor(
		private route: ActivatedRoute,
		private courseService: CoursesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((routeParams) => {
			const id = parseInt(routeParams.get('id'), 10);
			const newCourse = new Course(null, '', '', 0, '', false, []);
			if (isNaN(id)) {
				this.course = newCourse;
			} else {
				const courseFromService = this.courseService.getById(id);
				this.course = courseFromService ? courseFromService : newCourse;
			}
		});
		// this.authors = ['Aizek Azimov', 'Bill Gates', 'Snowman'];
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

	public onSave(): void {
		console.log('add course. on save', this.course);
	}

	public onCancel(): void {
		this.router.navigateByUrl('/courses');
	}
}
