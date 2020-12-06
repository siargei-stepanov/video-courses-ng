import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenData, UserData } from '../auth.model';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private AUTH_TOKEN_NAME = 'authentication';
	constructor(private http: HttpClient) {}

	public login(login: string, password: string): Promise<void> {
		return this.http
			.post(`${environment.BE_ENDPOINT}/auth/login`, {
				login,
				password,
			})
			.toPromise()
			.then((tokenData: TokenData) => {
				const token = tokenData.token;

				return this.http
					.post(`${environment.BE_ENDPOINT}/auth/userInfo`, {
						token,
					})
					.toPromise()
					.then((userData: UserData) => {
						localStorage.setItem(
							this.AUTH_TOKEN_NAME,
							JSON.stringify({
								token,
								user: {
									id: userData.id,
									firstName: userData.name.first,
									lastName: userData.name.last,
								},
							})
						);
					});
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
}
