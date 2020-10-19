import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
	public courses: Course[];

	constructor() { }

	ngOnInit(): void {
		this.courses = [{
			id: 1,
			title: 'Angular Mentoring Program',
			duration: 600,
			description: 'Overview of Angular with lectures and homework.',
			creationDate: '2020-01-01'
		}, {
			id: 2,
			title: 'NodeJS Mentoring Program',
			duration: 740,
			description: 'Overview of NodeJS with lectures and homework. Event loops and stuff.',
			creationDate: '2020-03-02'
		}];
	}

	public editCourse(id: number): void {
		console.log(`try to edit course id=${id}`);
	}

	public deleteCourse(id: number): void {
		console.log(`Delete course with id=${id}`);
	}

	public loadMore(): void {
		console.log('Load More clicked!');
	}

}
