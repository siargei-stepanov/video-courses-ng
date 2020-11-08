import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {}

	ngOnInit(): void {}

	public onLogout() {
		this.authenticationService.logout();
	}
}
