import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent. Test as standalone', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SearchComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('searchClick', () => {
		it('should log in the console', () => {
			const query = 'test query';
			spyOn(window.console, 'log');
			component.query = query;
			component.searchClick();
			expect(window.console.log).toHaveBeenCalledWith(jasmine.any(String), query);
		});
	});
});
