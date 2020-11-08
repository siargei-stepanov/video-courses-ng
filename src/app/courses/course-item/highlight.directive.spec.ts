import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
	let fixture;
	let elements: ElementRef[];

	beforeEach(() => {
		jasmine.clock().install();
		jasmine.clock().mockDate(new Date('2020-01-20'));

		fixture = TestBed.configureTestingModule({
			declarations: [TestComponent, HighlightDirective],
		}).createComponent(TestComponent);
		fixture.detectChanges();
		elements = fixture.debugElement.queryAll(By.css('p'));
	});
	afterEach(() => {
		jasmine.clock().uninstall();
	});

	it('should have elements', () => {
		expect(elements.length).toEqual(3);
	});

	it('future element should have blue border', () => {
		const el = elements[0];

		expect(el.nativeElement.style.borderColor).toEqual('blue');
	});

	it('2 weeks before the current date element should have green border', () => {
		const el = elements[1];

		expect(el.nativeElement.style.borderColor).toEqual('green');
	});

	it('older than 2 weeks element should have no border specified', () => {
		const el = elements[2];

		expect(el.nativeElement.style.borderColor).toEqual('');
	});
});

@Component({
	template: `<p appHighlight date="2020-01-25"></p>
		<p appHighlight date="2020-01-15"></p>
		<p appHightlight date="2020-01-01"></p>`,
})
class TestComponent {}
