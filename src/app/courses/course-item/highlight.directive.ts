import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
	@Input() date: string;

	constructor(private el: ElementRef) {
	}

	ngAfterViewInit(): void {
		let color: string;
		const creationDate = new Date(this.date).getTime();
		const currentDate = new Date().getTime();
		const twoWeeksAgo = currentDate - 1209600000;
		if (creationDate > currentDate) {
			color = 'blue';
		} else if (creationDate < currentDate && creationDate >= twoWeeksAgo) {
			color = 'green';
		}
		if (color) {
			this.el.nativeElement.style.borderColor = color;
		}
	}

}
