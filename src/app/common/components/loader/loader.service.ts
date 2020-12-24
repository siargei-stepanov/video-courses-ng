import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoaderService {
	private loader$ = new Subject<boolean>();
	constructor() {}

	public showLoader(): void {
		this.loader$.next(true);
	}

	public hideLoader(): void {
		this.loader$.next(false);
	}

	public getLoaderSubject(): Subject<boolean> {
		return this.loader$;
	}
}
