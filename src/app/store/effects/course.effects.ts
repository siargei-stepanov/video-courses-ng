import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/common/course.model';
import { CoursesService } from 'src/app/common/services/courses.service';
import {
	ECourseActions,
	loadCourseCompleted,
	saveCourseCompleted,
} from '../actions/course.actions';
import { ICourseIdPayload } from '../state/course.state';

@Injectable({ providedIn: 'root' })
export class CourseEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		private courseService: CoursesService
	) {}

	loadCourse$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ECourseActions.loadCourse),
			distinctUntilChanged(),
			switchMap((data: ICourseIdPayload) =>
				this.courseService.getById(data.id).pipe(map(loadCourseCompleted))
			)
		)
	);

	saveCourse$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ECourseActions.saveCourse),
			distinctUntilChanged(),
			switchMap((course: Course) => {
				const observable = course.id
					? this.courseService.update(course)
					: this.courseService.create(course);
				return observable.pipe(map(saveCourseCompleted));
			})
		)
	);

	saveCourseCompleted$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(ECourseActions.saveCourseCompleted),
				distinctUntilChanged(),
				tap(() => this.router.navigateByUrl('courses'))
			),
		{ dispatch: false }
	);
}
