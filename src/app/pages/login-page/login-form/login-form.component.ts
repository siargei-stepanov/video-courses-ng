import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
	public login: string;
	public password: string;
	constructor(private store: Store) {}

	ngOnInit(): void {}

	public loginSubmit(): void {
		this.store.dispatch(login({ login: this.login, password: this.password }));
	}
}
