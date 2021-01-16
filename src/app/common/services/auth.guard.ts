import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { userLoadFromLocalStorage } from 'src/app/store/actions/user.actions';
import { AuthenticationService } from './authentication.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthenticationService,
		private router: Router,
		private store: Store
	) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const isAuthenticated = this.authService.isAuthenticated();
		if (isAuthenticated) {
			this.store.dispatch(userLoadFromLocalStorage());
		} else {
			this.router.navigateByUrl('login');
		}

		return from([isAuthenticated]);
	}
}
