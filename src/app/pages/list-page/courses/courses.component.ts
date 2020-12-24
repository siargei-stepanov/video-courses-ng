import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/services/courses.service';
import { Course } from '../../../common/course.model';
import { FilterPipe } from './filter.pipe';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit, OnDestroy {
	public courses: Course[];
	private searchQuery: string;
	private coursePage: number;
	private COURSE_PER_PAGE = 3;
	private DEFAULT_SORT = 'date';
	private subscribtions: Subscription[] = [];

	constructor(private coursesService: CoursesService, private router: Router) {}

	ngOnInit(): void {
		this.coursePage = 1;
		this.updateCourses();
	}

	public editCourse(id: number): void {
		this.router.navigateByUrl(`/courses/${id}`);
	}

	public deleteCourse(course: Course): void {
		const shouldDelete = confirm(
			`Do you really want to delete course ${course.name}?`
		);
		if (shouldDelete) {
			this.subscribtions.push(
				this.coursesService.remove(course).subscribe(
					() => {
						this.updateCourses();
					},
					(error) => {
						console.error('cannot delete the course', error);
					}
				)
			);
		}
	}

	public addCourse(): void {
		this.router.navigateByUrl('/courses/new');
	}

	public loadMore(): void {
		this.coursePage++;
		this.updateCourses();
	}

	public searchCourse(query: string): void {
		this.searchQuery = query;
		this.coursePage = 1;
		this.updateCourses(this.searchQuery);
	}

	private updateCourses(text?: string): void {
		this.subscribtions.push(this.coursesService.getList(
			0,
			this.coursePage * this.COURSE_PER_PAGE,
			this.DEFAULT_SORT,
			text || this.searchQuery
		).subscribe((data) => {
			this.courses = data;
		}));
	}

	ngOnDestroy(): void {
		this.subscribtions.forEach((subscription) => {
			subscription.unsubscribe();
		});
	}
}
