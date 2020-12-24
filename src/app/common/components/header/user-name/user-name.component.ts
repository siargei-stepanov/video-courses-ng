import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { User } from '../user.model';

@Component({
	selector: 'app-user-name',
	templateUrl: './user-name.component.html',
	styleUrls: ['./user-name.component.less'],
})
export class UserNameComponent implements OnInit {
	public user: User;

	constructor(private authService: AuthenticationService) {}

	ngOnInit(): void {
		this.user = this.authService.getUserInfo().user;
	}
}
