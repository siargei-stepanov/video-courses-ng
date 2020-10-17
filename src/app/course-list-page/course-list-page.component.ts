import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
	selector: 'app-course-list-page',
	templateUrl: './course-list-page.component.html',
	styleUrls: ['./course-list-page.component.less']
})
export class CourseListPageComponent implements OnInit {
	public courses: Course[];

	constructor() {
		this.courses = [{
			id: 1,
			title: 'Angular Mentoring Program',
			duration: 600,
			description: 'Overview of Angular with lectures and homework',
			creationDate: new Date('2020-01-01')
		}];
	}

	ngOnInit(): void {
	}

}
