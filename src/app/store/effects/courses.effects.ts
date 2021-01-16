import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
	catchError,
	distinctUntilChanged,
	map,
	switchMap,
	tap,
	withLatestFrom,
} from 'rxjs/operators';

import { CoursesService } from 'src/app/common/services/courses.service';
import {
	loadCoursesCompleted,
	ECoursesActions,
	loadCourses,
	deleteCourseCompleted,
	deleteCourseFailed,
} from '../actions/courses.actions';
import { selectCoursesParams } from '../selectors/courses.selectors';

@Injectable({ providedIn: 'root' })
export class CoursesEffects {
	constructor(
		private actions$: Actions,
		private store: Store,
		private coursesService: CoursesService
	) {}

	loadCourses$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ECoursesActions.LoadCourses),
			withLatestFrom(this.store.select(selectCoursesParams)),
			switchMap(([action, params]) =>
				this.coursesService
					.getList(params.start, params.count, params.sort, params.query)
					.pipe(
						map((courses) => {
							return loadCoursesCompleted({ courses });
						})
					)
			)
		)
	);

	increaseCount$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ECoursesActions.IncreaseCount),
			distinctUntilChanged(),
			map(loadCourses)
		)
	);

	deleteCourse$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ECoursesActions.DeleteCourse),
			distinctUntilChanged(),
			switchMap((course) =>
				this.coursesService.remove(course).pipe(
					map(deleteCourseCompleted),
					catchError((error) => of(deleteCourseFailed({ error })))
				)
			)
		)
	);

	deleteCourseFailed$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(ECoursesActions.DeleteCourseFailed),
				distinctUntilChanged(),
				tap(() => {
					alert('Delete course failed. Please try again later');
				})
			),
		{ dispatch: false }
	);
}
