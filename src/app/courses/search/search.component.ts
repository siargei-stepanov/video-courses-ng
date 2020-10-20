import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
	public query = '';

	constructor() { }

	ngOnInit(): void {
	}

	public searchClick(): void {
		console.log('Try to search the following:', this.query);
	}

}
