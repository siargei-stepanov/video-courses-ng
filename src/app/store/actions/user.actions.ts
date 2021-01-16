import { createAction, props } from '@ngrx/store';

import { TokenData, UserData } from 'src/app/common/auth.model';
import { IUserLoginPayload, IUserState } from '../state/user.state';

export enum EUserActions {
	Login = '[User] Login',
	LoginSuccess = '[User] LoginSuccess',
	LoginError = '[User] LoginError',
	UserLoadData = '[User] UserLoadData',
	UserDataLoaded = '[User] UserDataLoaded',
	UserLoadFromLocalStorage = '[User] UserLoadFromLocalStorage',
	UserFromLocalStorageLoaded = '[User] UserFromLocalStorageLoaded',
	Logout = '[User] Logout',
}

export const login = createAction(
	EUserActions.Login,
	props<IUserLoginPayload>()
);
export const loginSuccess = createAction(
	EUserActions.LoginSuccess,
	props<TokenData>()
);
export const loginError = createAction(EUserActions.LoginError, props<any>());
export const userLoadData = createAction(
	EUserActions.UserLoadData,
	props<TokenData>()
);
export const userDataLoaded = createAction(
	EUserActions.UserDataLoaded,
	props<UserData>()
);
export const userLoadFromLocalStorage = createAction(
	EUserActions.UserLoadFromLocalStorage
);
export const userFromLocalStorageLoaded = createAction(
	EUserActions.UserFromLocalStorageLoaded,
	props<IUserState>()
);
export const logout = createAction(EUserActions.Logout);
