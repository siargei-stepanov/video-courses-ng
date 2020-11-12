import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
	const AUTH_TOKEN_NAME = 'authentication';
	let service: AuthenticationService;

	beforeEach(() => {
		localStorage.clear();
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthenticationService);
		spyOn(localStorage, 'setItem').and.callThrough();
		spyOn(localStorage, 'removeItem').and.callThrough();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should set auth data on login', () => {
		service.login();
		expect(localStorage.setItem).toHaveBeenCalled();
	});

	it('should remove auth data on logout', () => {
		localStorage.setItem(AUTH_TOKEN_NAME, '{}');
		service.logout();
		expect(localStorage[AUTH_TOKEN_NAME]).toBeUndefined();
		expect(localStorage.removeItem).toHaveBeenCalled();
	});

	it('should proper calculate isAuthenticated', () => {
		expect(service.isAuthenticated()).toEqual(false);

		localStorage.setItem(AUTH_TOKEN_NAME, '{}');
		expect(service.isAuthenticated()).toEqual(true);
	});
});
