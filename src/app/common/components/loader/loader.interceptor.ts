import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	constructor(private loaderService: LoaderService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.loaderService.showLoader();
		return next.handle(req).pipe(
			tap((evt) => {
				if (evt instanceof HttpResponse) {
					this.loaderService.hideLoader();
				}
			}),
			catchError((err) => {
				this.loaderService.hideLoader();
				console.error('Error in request', err);
				throw err;
			})
		);
	}
}