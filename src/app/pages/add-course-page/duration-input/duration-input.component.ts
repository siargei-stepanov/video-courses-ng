import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DurationPipe } from 'src/app/common/services/duration.pipe';

@Component({
	selector: 'app-duration-input',
	templateUrl: './duration-input.component.html',
	styleUrls: ['./duration-input.component.less'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DurationInputComponent),
			multi: true,
		},
	],
})
export class DurationInputComponent implements OnInit, ControlValueAccessor {
	@Input() duration: string;
	public durationFormatted: string;
	private durationPipe: DurationPipe;
	private onChange: any = () => {};

	constructor() {}

	writeValue(value: string): void {
		this.duration = value;
		this.onDurationChange();
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {}

	ngOnInit(): void {
		this.durationPipe = new DurationPipe();
		if (this.duration) {
			this.onDurationChange();
		}
	}

	public onDurationChange(): void {
		this.durationFormatted = this.durationPipe.transform(this.duration);
		this.onChange(this.duration);
	}
}
