import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/common/course.model';
import { ICoursesArray, ICoursesParamsState } from '../state/courses.state';

export enum ECoursesActions {
	LoadCourses = '[Courses] LoadCourses',
	LoadCoursesCompleted = '[Courses] LoadCoursesCompleted',
	IncreaseCount = '[Courses] IncreaseCount',
	SetCoursesParams = '[Courses] SetCoursesParams',
	DeleteCourse = '[Courses] DeleteCourse',
	DeleteCourseCompleted = '[Courses] DeleteCourseCompleted',
	DeleteCourseFailed = '[Courses] DeleteCourseFailed',
}

export const loadCourses = createAction(ECoursesActions.LoadCourses);
export const loadCoursesCompleted = createAction(
	ECoursesActions.LoadCoursesCompleted,
	props<ICoursesArray>()
);
export const increaseCount = createAction(ECoursesActions.IncreaseCount);
export const setCoursesParams = createAction(
	ECoursesActions.SetCoursesParams,
	props<Partial<ICoursesParamsState>>()
);
export const deleteCourse = createAction(
	ECoursesActions.DeleteCourse,
	props<Course>()
);
export const deleteCourseCompleted = createAction(
	ECoursesActions.DeleteCourseCompleted
);
export const deleteCourseFailed = createAction(
	ECoursesActions.DeleteCourseFailed,
	props<any>()
);
