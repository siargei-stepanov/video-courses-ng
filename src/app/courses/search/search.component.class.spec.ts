import { SearchComponent } from './search.component';

describe('SearchComponent. Testing as class.', () => {
	let component: SearchComponent;

	beforeEach(async () => {
		component = new SearchComponent();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('searchClick', () => {
		it('should log in the console', () => {
			const query = 'sample';
			spyOn(window.console, 'log');

			component.query = query;
			component.searchClick();
			expect(window.console.log).toHaveBeenCalledWith(jasmine.any(String), query);
		});
	});
});
