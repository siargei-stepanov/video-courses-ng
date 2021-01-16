import { authorsReducers } from './reducers/authors.reducers';
import { coursesReducers } from './reducers/courses.reducers';
import { userReducers } from './reducers/user.reducers';

export const reducers = {
	user: userReducers,
	courses: coursesReducers,
	authors: authorsReducers,
};
