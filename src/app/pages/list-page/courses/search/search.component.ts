import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
	@Output() searchCourseEvent = new EventEmitter<string>();
	public query = '';

	constructor() {}

	ngOnInit(): void {}

	public searchClick(): void {
		this.searchCourseEvent.emit(this.query);
	}
}
