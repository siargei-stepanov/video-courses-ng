import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
	constructor(private authService: AuthenticationService, private router: Router) {}

	ngOnInit(): void {}

	public login(): void {
		this.authService.login();
		this.router.navigateByUrl('courses');
	}
}
