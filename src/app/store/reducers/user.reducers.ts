import { createReducer, on } from '@ngrx/store';
import { UserData } from 'src/app/common/auth.model';
import {
	loginSuccess,
	logout,
	userDataLoaded,
	userFromLocalStorageLoaded,
} from '../actions/user.actions';
import {
	initialUserState,
	IUserState,
	IUserStateUser,
} from '../state/user.state';

const userReducerDef = createReducer(
	initialUserState,
	on(loginSuccess, (state, action) => {
		return { ...state, token: action.token };
	}),
	on(userDataLoaded, (state, user: UserData) => {
		return {
			...state,
			user: {
				name: user.name,
				fullName: getFullUserName(user),
				id: user.id,
			},
		};
	}),
	on(userFromLocalStorageLoaded, (state, data: IUserState) => {
		return {
			...state,
			token: data.token,
			user: {
				...data.user,
				fullName: getFullUserName(data.user),
			},
		};
	}),
	on(logout, () => initialUserState)
);

export function userReducers(state, action): IUserState {
	return userReducerDef(state, action);
}

const getFullUserName = (user: IUserStateUser | UserData): string => {
	if (!user) {
		return '';
	}
	return `${user.name.first} ${user.name.last}`;
};
