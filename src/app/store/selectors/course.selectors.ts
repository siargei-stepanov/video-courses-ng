import { IState } from '../state';

export const selectCourse = (state: IState) => state.course.course;
export const selectIsAddCoursePage = (state: IState) =>
	!state.course.course?.id;
