import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../common/authentication.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let authService: AuthenticationService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			providers: [
				{ provider: AuthenticationService, useClass: MockAuthentication },
			],
		}).compileComponents();
		authService = TestBed.inject(AuthenticationService);
		spyOn(authService, 'logout');
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
});

class MockAuthentication {
	// tslint:disable-next-line
	public logout() {}
}
