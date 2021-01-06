import { IState } from '../state';
import { ICoursesParamsState } from '../state/courses.state';

export const selectCoursesParams = (state: IState): ICoursesParamsState =>
	state.courses.params;

export const selectCoursesList = (state: IState) => state.courses.courses;
export const selectHasData = (state: IState) =>
	state.courses.courses.length > 0;
