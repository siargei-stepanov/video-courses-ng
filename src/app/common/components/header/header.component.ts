import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/services/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {}

	ngOnInit(): void {}

	public onLogout(): void {
		this.authenticationService.logout();
	}

	public isAuthenticated(): boolean {
		return this.authenticationService.isAuthenticated();
	}
}
