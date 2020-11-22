import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/common/course.model';
import { CoursesService } from 'src/app/common/services/courses.service';

@Component({
	selector: 'app-add-course-form',
	templateUrl: './add-course-form.component.html',
	styleUrls: ['./add-course-form.component.less'],
})
export class AddCourseFormComponent implements OnInit {
	public course: Course;

	constructor(private route: ActivatedRoute, private courseService: CoursesService, private router: Router) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((routeParams) => {
			const id = parseInt(routeParams.get('id'), 10);
			const newCourse = new Course(null, '', '', 0, '', false);
			if (isNaN(id)) {
				this.course = newCourse;
			} else {
				const courseFromService = this.courseService.getById(id);
				this.course = courseFromService ? courseFromService : newCourse;
			}
		});
	}

	public onSave(): void {
		console.log('add course. on save');
	}

	public onCancel(): void {
		this.router.navigateByUrl('/courses');
	}
}
