import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../course.model';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthorsService {
	constructor(private http: HttpClient) {}

	public getAuthors(): Observable<Author[]> {
		return this.http.get<Author[]>(`${environment.BE_ENDPOINT}/authors`);
	}
}
