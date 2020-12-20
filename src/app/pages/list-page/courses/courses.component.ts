import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/services/courses.service';
import { Course } from '../../../common/course.model';
import { FilterPipe } from './filter.pipe';
import { Router } from '@angular/router';

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

	constructor(private coursesService: CoursesService, private router: Router) {}

	ngOnInit(): void {
		this.filteredCourses = this.courses = this.coursesService.getList();
	}

	public editCourse(id: number): void {
		this.router.navigateByUrl(`/courses/${id}`);
	}

	public deleteCourse(course: Course): void {
		const shouldDelete = confirm(
			`Do you really want to delete course ${course.title}?`
		);
		if (shouldDelete) {
			this.courses = this.coursesService.remove(course);
			this.searchCourse(this.searchQuery);
		}
	}

	public addCourse(): void {
		this.router.navigateByUrl('/courses/new');
	}

	public loadMore(): void {
		console.log('Load More clicked!');
	}

	public searchCourse(query: string): void {
		this.searchQuery = query;
		this.filteredCourses = this.filterPipe.transform(this.courses, query);
	}
}
