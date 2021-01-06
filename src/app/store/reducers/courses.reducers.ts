import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/common/course.model';
import {
	deleteCourse,
	increaseCount,
	loadCoursesCompleted,
	setCoursesParams,
} from '../actions/courses.actions';
import {
	ICoursesArray,
	ICoursesState,
	initialCoursesState,
} from '../state/courses.state';

const coursesReducerDef = createReducer(
	initialCoursesState,
	on(loadCoursesCompleted, (state, courses: ICoursesArray) => {
		return { ...state, courses: [...courses.courses] };
	}),
	on(increaseCount, (state) => {
		return {
			...state,
			params: { ...state.params, count: state.params.count + 3 },
		};
	}),
	on(setCoursesParams, (state, data) => {
		return { ...state, params: { ...state.params, ...data } };
	}),
	on(deleteCourse, (state, course) => {
		return {
			...state,
			courses: state.courses.filter((item: Course) => item.id !== course.id),
		};
	})
);

export function coursesReducers(state, action): ICoursesState {
	return coursesReducerDef(state, action);
}
