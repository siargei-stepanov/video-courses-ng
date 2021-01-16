import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILoginFormModel } from 'src/app/common/auth.model';
import { login } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
	public login: string;
	public password: string;
	public model: ILoginFormModel = {
		login: '',
		password: '',
	};
	constructor(private store: Store) {}

	ngOnInit(): void {}

	public loginSubmit(): void {
		this.store.dispatch(login(this.model));
	}

	public forgotPassword(event): void {
		event.preventDefault();
	}
}
