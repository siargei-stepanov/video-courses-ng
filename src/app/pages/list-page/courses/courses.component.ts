import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../../common/course.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	tap,
} from 'rxjs/operators';
import { SearchCourseService } from 'src/app/common/services/search-course.service';
import { Store } from '@ngrx/store';
import {
	deleteCourse,
	increaseCount,
	loadCourses,
	setCoursesParams,
} from 'src/app/store/actions/courses.actions';
import {
	selectCoursesList,
	selectHasData,
} from 'src/app/store/selectors/courses.selectors';
@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit, OnDestroy {
	public courses$ = this.store.select(selectCoursesList);
	public hasData$ = this.store.select(selectHasData);
	private subscribtions: Subscription[] = [];

	constructor(
		private router: Router,
		private store: Store,
		private searchCourseService: SearchCourseService
	) {}

	ngOnInit(): void {
		this.store.dispatch(loadCourses());

		this.searchCourseService
			.getSubject()
			.pipe(
				map((query: string) => (query || '').trim()),
				filter((query: string) => query.length >= 3 || query.length === 0),
				distinctUntilChanged(),
				debounceTime(500),
				tap((query: string) => this.searchCourse(query))
			)
			.subscribe();
	}

	public editCourse(id: number): void {
		this.router.navigateByUrl(`/courses/${id}`);
	}

	public deleteCourse(course: Course): void {
		const shouldDelete = confirm(
			`Do you really want to delete course ${course.name}?`
		);
		if (shouldDelete) {
			this.store.dispatch(deleteCourse(course));
		}
	}

	public addCourse(): void {
		this.router.navigateByUrl('/courses/new');
	}

	public loadMore(): void {
		this.store.dispatch(increaseCount());
	}

	public searchCourse(query: string): void {
		this.store.dispatch(setCoursesParams({ query, count: 3 }));
		this.store.dispatch(loadCourses());
	}

	ngOnDestroy(): void {
		this.subscribtions.forEach((subscription) => {
			subscription.unsubscribe();
		});
	}
}
