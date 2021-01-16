import { createReducer, on } from '@ngrx/store';
import { loadCourseCompleted, setCourse } from '../actions/course.actions';
import { ICourseState, initialCourseState } from '../state/course.state';

const courseReducerDef = createReducer(
	initialCourseState,
	on(loadCourseCompleted, (state, course) => {
		return { ...state, course };
	}),
	on(setCourse, (state, course) => {
		return { ...state, course };
	})
);

export function courseReducers(state, action): ICourseState {
	return courseReducerDef(state, action);
}
