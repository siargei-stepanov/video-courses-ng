import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
	public login: string;
	public password: string;
	constructor(
		private authService: AuthenticationService,
		private router: Router
	) {}

	ngOnInit(): void {}

	public loginSubmit(): void {
		this.authService
			.login(this.login, this.password)
			.then(() => {
				this.router.navigateByUrl('courses');
			})
			.catch(() => {
				alert(
					'Your login/password combination is not correct. Please check your creds and try one more time.'
				);
			});
	}
}
