import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { FilterPipe } from './filter.pipe';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit {
	public filteredCourses: Course[];
	private filterPipe = new FilterPipe();
	private courses: Course[];

	constructor() {}

	ngOnInit(): void {
		this.filteredCourses = this.courses = this.getCourses();
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

	public searchCourse(query: string): void {
		this.filteredCourses = this.filterPipe.transform(this.courses, query);
	}

	private getCourses(): Course[] {
		return [
			{
				id: 1,
				title: 'Angular Mentoring Program',
				duration: 600,
				topRated: true,
				description: 'Overview of Angular with lectures and homework.',
				creationDate: '2020-10-20',
			},
			{
				id: 2,
				title: 'NodeJS Mentoring Program',
				duration: 740,
				topRated: false,
				description:
					'Overview of NodeJS with lectures and homework. Event loops and stuff.',
				creationDate: '2020-12-01',
			},
			{
				id: 3,
				title: 'HTML/CSS Mentoring Program',
				duration: 260,
				topRated: false,
				description: 'HTML and CSS courses for IT newcomers.',
				creationDate: '2020-09-01',
			},
		];
	}
}
