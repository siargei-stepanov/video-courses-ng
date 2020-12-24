import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private AUTH_HEADER_NAME = 'Authorization';
	constructor(private authService: AuthenticationService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (req.url.includes('/auth/login')) {
			return next.handle(req);
		}
		let token;

		if (req.url.includes('/auth/userInfo') && req.body && req.body.token) {
			token = req.body.token;
		} else {
			const userInfo = this.authService.getUserInfo();
			token = userInfo.token;
		}

		if (token && !req.headers.has(this.AUTH_HEADER_NAME)) {
			req = req.clone({
				setHeaders: {
					[this.AUTH_HEADER_NAME]: token,
				},
			});
		}
		return next.handle(req);
	}
}
