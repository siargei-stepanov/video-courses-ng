import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions/user.actions';
import { selectIsAuthenticated } from 'src/app/store/selectors/user.selectors';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	public isAuthenticated$ = this.store.select(selectIsAuthenticated);

	constructor(private store: Store) {}

	ngOnInit(): void {}

	public onLogout(): void {
		this.store.dispatch(logout());
	}
}
