import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private AUTH_TOKEN_NAME = 'authentication';
	constructor() {}

	public login(): void {
		console.log('login');
		localStorage.setItem(
			this.AUTH_TOKEN_NAME,
			JSON.stringify({
				token: 'fakeToken',
				user: {
					firstName: 'Harry',
					lastName: 'Potter',
				},
			})
		);
	}

	public logout(): void {
		console.log('logout');
		localStorage.removeItem(this.AUTH_TOKEN_NAME);
	}

	public isAuthenticated(): boolean {
		const authData = localStorage[this.AUTH_TOKEN_NAME];

		return !!authData;
	}

	public getUserInfo(): any {
		console.log('getUserInfo');
		const authData = JSON.parse(localStorage[this.AUTH_TOKEN_NAME]);

		return authData;
	}
}
