import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../common/services/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService, private router: Router) {}

	ngOnInit(): void {}

	public onLogout(): void {
		this.authenticationService.logout();
		this.router.navigateByUrl('login');
	}

	public isAuthenticated(): boolean {
		return this.authenticationService.isAuthenticated();
	}
}
