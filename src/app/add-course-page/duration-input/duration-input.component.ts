import { Component, OnInit } from '@angular/core';
import { DurationPipe } from 'src/app/courses/duration.pipe';

@Component({
	selector: 'app-duration-input',
	templateUrl: './duration-input.component.html',
	styleUrls: ['./duration-input.component.less'],
})
export class DurationInputComponent implements OnInit {
	public durationFormatted: string;
	public duration: string;
	private durationPipe: DurationPipe;
	constructor() {}

	ngOnInit(): void {
		this.durationPipe = new DurationPipe();
	}

	public onDurationChange(): void {
		this.durationFormatted = this.durationPipe.transform(this.duration);
	}
}
