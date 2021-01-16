import { createReducer, on } from '@ngrx/store';
import { loadAuthorsCompleted } from '../actions/authors.actions';
import { IAuthorsState, initialAuthorsState } from '../state/authors.state';

const authorsReducerDef = createReducer(
	initialAuthorsState,
	on(loadAuthorsCompleted, (state, data) => {
		return { ...state, authors: [...data.authors] };
	})
);

export function authorsReducers(state, action): IAuthorsState {
	return authorsReducerDef(state, action);
}
