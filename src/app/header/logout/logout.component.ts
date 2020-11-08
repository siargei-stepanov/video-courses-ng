import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.less'],
})
export class LogoutComponent implements OnInit {
	@Output() onLogoutEvent = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	public logout(): void {
		this.onLogoutEvent.emit();
	}
}
