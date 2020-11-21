import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration',
})
export class DurationPipe implements PipeTransform {
	transform(minutes: string): string {
		const min = Number.parseInt(minutes, 10);
		if (Number.isNaN(min)) {
			return '';
		}

		if (min < 60) {
			return `${min} min`;
		} else {
			return `${Math.floor(min / 60)} h ${min % 60} min`;
		}
	}
}
