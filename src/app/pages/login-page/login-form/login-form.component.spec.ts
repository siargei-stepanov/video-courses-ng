import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;
	let authService: AuthenticationService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginFormComponent],
			providers: [
				{
					provider: AuthenticationService,
					useClass: MockAuthentication,
				},
			],
		}).compileComponents();
		authService = TestBed.inject(AuthenticationService);
		spyOn(authService, 'login');
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call auth service', () => {
		component.login();
		expect(authService.login).toHaveBeenCalled();
	});
});

class MockAuthentication {
	// tslint:disable-next-line
	public login() {}
}
