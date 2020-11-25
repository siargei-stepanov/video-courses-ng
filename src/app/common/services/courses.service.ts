import { Injectable } from '@angular/core';
import { Course } from '../course.model';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	private courses: Course[];
	constructor() {
		this.courses = this.generateCourses();
	}

	public create(course: Course): Course[] {
		this.courses = this.courses.concat(course);
		return this.courses;
	}

	public getList(): Course[] {
		return this.courses;
	}

	public getById(id: number): Course {
		return this.courses.find((course) => {
			return course.id === id;
		});
	}

	public update(course: Course): void {
		this.remove(course);
		this.create(course);
	}

	public remove(course: Course): Course[] {
		this.courses = this.courses.filter((courseValue) => {
			return courseValue.id !== course.id;
		});
		return this.courses;
	}

	public removeById(id: number): Course[] {
		this.courses = this.courses.filter((course) => {
			return course.id !== id;
		});
		return this.courses;
	}

	private generateCourses(): Course[] {
		return [
			{
				id: 1,
				title: 'Angular Mentoring Program',
				duration: 600,
				topRated: true,
				description: 'Overview of Angular with lectures and homework.',
				creationDate: '2020-10-20',
				authors: ['Tolstoi', 'Dostoevsky', 'Lermontov']
			},
			{
				id: 2,
				title: 'NodeJS Mentoring Program',
				duration: 740,
				topRated: false,
				description:
					'Overview of NodeJS with lectures and homework. Event loops and stuff.',
				creationDate: '2020-12-01',
				authors: ['Bill Gates', 'Steve Jobs']
			},
			{
				id: 3,
				title: 'HTML/CSS Mentoring Program',
				duration: 260,
				topRated: false,
				description: 'HTML and CSS courses for IT newcomers.',
				creationDate: '2020-09-01',
				authors: ['Brad Pit', 'Leonardo Di Caprio']
			},
		];
	}
}
