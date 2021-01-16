import { IAuthorsState } from './state/authors.state';
import { ICoursesState } from './state/courses.state';
import { IUserState } from './state/user.state';

export interface IState {
	user: IUserState;
	courses: ICoursesState;
	authors: IAuthorsState;
}
