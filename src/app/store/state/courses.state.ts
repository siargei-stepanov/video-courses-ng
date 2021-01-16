import { Course } from 'src/app/common/course.model';

export const initialCoursesState = {
	courses: [],
	params: {
		start: 0,
		count: 3,
		sort: 'date',
		query: '',
		page: 1,
	},
};

export interface ICoursesState {
	courses: ReadonlyArray<Course>;
	params: ICoursesParamsState;
}

export interface ICoursesParamsState {
	start: number;
	count: number;
	sort: string;
	query: string;
	page: number;
}

export interface ICoursesArray {
	courses: ReadonlyArray<Course>;
}
