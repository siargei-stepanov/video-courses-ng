import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectFullName } from 'src/app/store/selectors/user.selectors';

@Component({
	selector: 'app-user-name',
	templateUrl: './user-name.component.html',
	styleUrls: ['./user-name.component.less'],
})
export class UserNameComponent implements OnInit {
	public userName$ = this.store.pipe(select(selectFullName));

	constructor(private store: Store) {}

	ngOnInit(): void {}
}
