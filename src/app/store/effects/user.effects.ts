import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
	catchError,
	distinctUntilChanged,
	map,
	mergeMap,
	switchMap,
	tap,
} from 'rxjs/operators';
import { TokenData, UserData } from 'src/app/common/auth.model';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import {
	EUserActions,
	loginError,
	loginSuccess,
	userDataLoaded,
	userFromLocalStorageLoaded,
	userLoadData,
} from '../actions/user.actions';
import { IUserLoginPayload } from '../state/user.state';

@Injectable({ providedIn: 'root' })
export class UserEffects {
	constructor(
		private actions$: Actions,
		private authService: AuthenticationService,
		private router: Router
	) {}

	login$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(EUserActions.Login),
				distinctUntilChanged(),
				switchMap((loginData: IUserLoginPayload) =>
					this.authService.loginRx(loginData).pipe(
						map(loginSuccess),
						catchError((error) => of(loginError({ error })))
					)
				)
			),
		{ useEffectsErrorHandler: false }
	);

	loginSuccess$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EUserActions.LoginSuccess),
			distinctUntilChanged(),
			map(userLoadData)
		)
	);

	loginError$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(EUserActions.LoginError),
				distinctUntilChanged(),
				tap(() => {
					alert(
						'Your login/password combination is not correct. Please check your creds and try one more time.'
					);
				})
			),
		{ dispatch: false }
	);

	loadData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EUserActions.UserLoadData),
			distinctUntilChanged(),
			mergeMap((data: TokenData) =>
				this.authService.fetchUserData(data).pipe(map(userDataLoaded))
			)
		)
	);

	userDataLoaded$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(EUserActions.UserDataLoaded),
				distinctUntilChanged(),
				tap((data: UserData) => {
					this.authService.storeUserInfo(data);
					this.router.navigateByUrl('courses');
				})
			),
		{ dispatch: false }
	);

	userLoadFromLocalStorage = createEffect(() =>
		this.actions$.pipe(
			ofType(EUserActions.UserLoadFromLocalStorage),
			distinctUntilChanged(),
			map(() => {
				const data = this.authService.getUserInfo();
				return userFromLocalStorageLoaded(data);
			})
		)
	);

	logout$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(EUserActions.Logout),
				distinctUntilChanged(),
				tap(() => {
					this.authService.logout();
					this.router.navigateByUrl('login');
				})
			),
		{ dispatch: false }
	);
}
