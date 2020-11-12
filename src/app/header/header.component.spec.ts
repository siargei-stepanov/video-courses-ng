import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../common/authentication.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let authService: AuthenticationService;
	let isAuthenticated: boolean;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			providers: [
				{ provider: AuthenticationService, useClass: MockAuthentication },
			],
		}).compileComponents();
		authService = TestBed.inject(AuthenticationService);
		spyOn(authService, 'logout');
		spyOn(authService, 'isAuthenticated').and.callFake(() => isAuthenticated);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call authentication service on logout', () => {
		component.onLogout();
		expect(authService.logout).toHaveBeenCalled();
	});

	describe('isAuthenticated', () => {
		it('should return false when auth service returns false', () => {
			isAuthenticated = false;
			expect(component.isAuthenticated()).toEqual(false);
			expect(authService.isAuthenticated).toHaveBeenCalled();
		});

		it('should return false when auth service returns false', () => {
			isAuthenticated = true;
			expect(component.isAuthenticated()).toEqual(true);
			expect(authService.isAuthenticated).toHaveBeenCalled();
		});
	});
});

class MockAuthentication {
	// tslint:disable-next-line
	public logout() {}
	// tslint:disable-next-line
	public isAuthenticated() {}
}
