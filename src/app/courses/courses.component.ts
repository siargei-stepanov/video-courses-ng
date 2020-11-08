import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../common/courses.service';
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
	private searchQuery: string;

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {
		this.filteredCourses = this.courses = this.coursesService.getList();
	}

	public editCourse(id: number): void {
		console.log(`try to edit course id=${id}`);
	}

	public deleteCourse(course: Course): void {
		const shouldDelete = confirm(`Do you really want to delete course ${course.title}?`);
		if (shouldDelete) {
			this.courses = this.coursesService.remove(course);
			this.searchCourse(this.searchQuery);
		}
	}

	public loadMore(): void {
		console.log('Load More clicked!');
	}

	public searchCourse(query: string): void {
		this.searchQuery = query;
		this.filteredCourses = this.filterPipe.transform(this.courses, query);
	}
}
