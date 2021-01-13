import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/common/course.model';
import { ICourseIdPayload } from '../state/course.state';

export enum ECourseActions {
	loadCourse = '[Course] LoadCourse',
	loadCourseCompleted = '[Course] LoadCourseCompleted',
	setCourse = '[Course] SetCourse',
	saveCourse = '[Course] SaveCourse',
	saveCourseCompleted = '[Course] SaveCourseCompleted',
}

export const loadCourse = createAction(
	ECourseActions.loadCourse,
	props<ICourseIdPayload>()
);
export const loadCourseCompleted = createAction(
	ECourseActions.loadCourseCompleted,
	props<Course>()
);

export const setCourse = createAction(
	ECourseActions.setCourse,
	props<Course>()
);
export const saveCourse = createAction(
	ECourseActions.saveCourse,
	props<Course>()
);
export const saveCourseCompleted = createAction(
	ECourseActions.saveCourseCompleted
);
