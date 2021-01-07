import { createAction, props } from '@ngrx/store';
import { IAuthorsArray } from '../state/authors.state';

export enum EAuthorsActions {
	LoadAuthors = '[Authors] LoadAuthors',
	LoadAuthorsCompleted = '[Authors] LoadAuthorsCompleted',
}

export const loadAuthors = createAction(EAuthorsActions.LoadAuthors);
export const loadAuthorsCompleted = createAction(
	EAuthorsActions.LoadAuthorsCompleted,
	props<IAuthorsArray>()
);
