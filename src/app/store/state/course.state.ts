import { Course } from 'src/app/common/course.model';

export const initialCourseState = null;

export interface ICourseState {
	course: Course;
}

export interface ICourseIdPayload {
	id: number;
}
