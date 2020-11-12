import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/authentication.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
	constructor(private authService: AuthenticationService) {}

	ngOnInit(): void {}

	public login(): void {
		console.log('login clicked!');
		this.authService.login();
	}
}
