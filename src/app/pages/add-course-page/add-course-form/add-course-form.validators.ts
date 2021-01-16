import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const dateRegexp = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/;
		const isValid = dateRegexp.test(control.value);
		return !isValid ? { date: { value: control.value } } : null;
	};
}

export function durationValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const durationRegexp = /^[1-9]{1}[0-9]{0,}$/;
		const isValid = durationRegexp.test(control.value);
		return !isValid ? { duration: { value: control.value } } : null;
	};
}
