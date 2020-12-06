import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	private DEFAULT_PAGE_SIZE = 3;
	constructor(private http: HttpClient) {}

	public create(course: Course): Observable<any> {
		return this.http.post(`${environment.BE_ENDPOINT}/courses`, course);
	}

	public getList(
		start = 0,
		count = this.DEFAULT_PAGE_SIZE,
		sort = 'date',
		text?: string
	): Observable<Course[]> {
		let url = `${
			environment.BE_ENDPOINT
		}/courses?start=${start}&count=${count}&sort=${encodeURI(sort)}`;
		if (text) {
			url += `&textFragment=${encodeURI(text)}`;
		}
		return this.http.get<Course[]>(url);
	}

	public getById(id: number): Observable<Course> {
		return this.http.get<Course>(`${environment.BE_ENDPOINT}/courses/${id}`);
	}

	public update(course: Course): Observable<Course> {
		return this.http.patch<Course>(
			`${environment.BE_ENDPOINT}/courses/${course.id}`,
			course
		);
	}

	public remove(course: Course): Observable<any> {
		return this.http.delete(`${environment.BE_ENDPOINT}/courses/${course.id}`);
	}

	public removeById(id: number): Observable<any> {
		return this.remove({ id } as Course);
	}
}
