import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenData, UserData } from '../auth.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IUserLoginPayload } from 'src/app/store/state/user.state';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private AUTH_TOKEN_NAME = 'authentication';
	constructor(private http: HttpClient) {}

	public loginRx(loginData: IUserLoginPayload): Observable<TokenData> {
		return this.http.post<TokenData>(`${environment.BE_ENDPOINT}/auth/login`, {
			login: loginData.login,
			password: loginData.password,
		});
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

	public fetchUserData(tokenData: TokenData): Observable<UserData> {
		return this.http.post<UserData>(
			`${environment.BE_ENDPOINT}/auth/userInfo`,
			{
				token: tokenData.token,
			}
		);
	}

	public storeUserInfo(userData: UserData): void {
		localStorage.setItem(
			this.AUTH_TOKEN_NAME,
			JSON.stringify({
				token: userData.fakeToken,
				user: {
					id: userData.id,
					name: userData.name,
				},
			})
		);
	}
}
