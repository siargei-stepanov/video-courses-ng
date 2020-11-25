import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DurationPipe } from 'src/app/common/services/duration.pipe';

@Component({
	selector: 'app-duration-input',
	templateUrl: './duration-input.component.html',
	styleUrls: ['./duration-input.component.less'],
})
export class DurationInputComponent implements OnInit {
	@Input() duration: string;
	@Output() durationChange = new EventEmitter();
	public durationFormatted: string;
	private durationPipe: DurationPipe;
	constructor() {}

	ngOnInit(): void {
		this.durationPipe = new DurationPipe();
		if (this.duration) {
			this.onDurationChange();
		}
	}

	public onDurationChange(): void {
		this.durationFormatted = this.durationPipe.transform(this.duration);
		this.durationChange.emit(this.duration);
	}
}
