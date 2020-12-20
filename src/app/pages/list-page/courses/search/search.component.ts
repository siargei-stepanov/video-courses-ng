import { Component, OnInit } from '@angular/core';
import { SearchCourseService } from 'src/app/common/services/search-course.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
	public query = '';

	constructor(private searchCourseService: SearchCourseService) {}

	ngOnInit(): void {}

	public searchKeyUp(): void {
		this.searchCourseService.getSubject().next(this.query);
	}
}
