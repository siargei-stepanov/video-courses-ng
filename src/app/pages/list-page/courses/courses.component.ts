import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/services/courses.service';
import { Course } from '../../../common/course.model';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	switchMap,
} from 'rxjs/operators';
import { SearchCourseService } from 'src/app/common/services/search-course.service';
@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit, OnDestroy {
	public courses: Course[];
	// public courses$: Observable<Course[]>;
	public hasData: boolean;
	private searchQuery: string;
	private coursePage: number;
	private COURSE_PER_PAGE = 3;
	private DEFAULT_SORT = 'date';
	private subscribtions: Subscription[] = [];

	constructor(
		private coursesService: CoursesService,
		private router: Router,
		private searchCourseService: SearchCourseService
	) {}

	ngOnInit(): void {
		this.coursePage = 1;

		this.searchCourseService
			.getSubject()
			.pipe(
				map((query: string) => (query || '').trim()),
				filter((query: string) => query.length >= 3 || query.length === 0),
				distinctUntilChanged(),
				debounceTime(500),
				switchMap((query: string) => this.searchCourse(query))
			)
			.subscribe();
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

	public searchCourse(query: string): Observable<Course[]> {
		this.searchQuery = query;
		this.coursePage = 1;
		return this.updateCourses(query);
	}

	public setCourses(courses: Course[]): void {
		this.courses = courses;
		this.hasData = courses.length > 0;
	}

	private updateCourses(text?: string): Observable<Course[]> {
		const observable = this.coursesService.getList(
			0,
			this.coursePage * this.COURSE_PER_PAGE,
			this.DEFAULT_SORT,
			text || this.searchQuery
		);

		observable.subscribe((data) => {
			this.setCourses(data);
		});

		return observable;
	}

	ngOnDestroy(): void {
		this.subscribtions.forEach((subscription) => {
			subscription.unsubscribe();
		});
	}
}
