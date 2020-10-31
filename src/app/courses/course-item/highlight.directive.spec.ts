import { ElementRef, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
	// mock date to be 2020-01-20
	beforeEach(() => {
		// TestBed.configureTestingModule({
		// 	providers: [
		// 		{
		// 			provide: ElementRef,
		// 			useClass: MockElementRef,
		// 		},
		// 	],
		// }).compileComponents();
	});
	// it('should create an instance', () => {
	// 	const directive = new HighlightDirective();
	// 	expect(directive).toBeTruthy();
	// });
});

@Component({
	template: `<p appHighlight date="2020-01-25"></p>
	<p appHighlight date="2020-01-15"></p>
	<p appHightlight date="2020-01-01"></p>`,
})
class TestComponent {}
