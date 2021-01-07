import { Author } from 'src/app/common/course.model';

export const initialAuthorsState = {
	authors: [],
};

export interface IAuthorsState {
	authors: ReadonlyArray<Author>;
}

export interface IAuthorsArray {
	authors: ReadonlyArray<Author>;
}
