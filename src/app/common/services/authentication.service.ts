import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenData, UserData } from '../auth.model';
import { environment } from '../../../environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private AUTH_TOKEN_NAME = 'authentication';
	constructor(private http: HttpClient) {}

	public login(login: string, password: string): Observable<void> {
		return this.http
			.post(`${environment.BE_ENDPOINT}/auth/login`, {
				login,
				password,
			})
			.pipe(
				mergeMap(this.fetchUserData.bind(this)),
				map(this.storeUserInfo.bind(this))
			);
	}

	public logout(): void {
		localStorage.removeItem(this.AUTH_TOKEN_NAME);
	}

	public isAuthenticated(): boolean {
		const authData = localStorage[this.AUTH_TOKEN_NAME];

		return !!authData;
	}

	public getUserInfo(): any {
		const authData = JSON.parse(localStorage[this.AUTH_TOKEN_NAME] || '{}');

		return authData;
	}

	private fetchUserData(tokenData: TokenData): Observable<UserData> {
		return this.http.post<UserData>(`${environment.BE_ENDPOINT}/auth/userInfo`, {
			token: tokenData.token,
		});
	}

	private storeUserInfo(userData: UserData): void {
		localStorage.setItem(
			this.AUTH_TOKEN_NAME,
			JSON.stringify({
				token: userData.fakeToken,
				user: {
					id: userData.id,
					firstName: userData.name.first,
					lastName: userData.name.last,
				},
			})
		);
	}
}
