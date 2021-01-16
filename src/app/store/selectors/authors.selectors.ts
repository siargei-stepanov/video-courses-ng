import { IState } from '../state';

export const selectAuthors = (state: IState) => {
	return state.authors.authors;
};
