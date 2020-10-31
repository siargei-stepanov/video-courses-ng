import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course.model';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {
	transform(courses: Course[], ...args: string[]): Course[] {
		const query = args[0];
		if (!query) {
			return courses;
		}
		return courses.filter((v) => {
			return v.title.toLowerCase().includes(query.toLowerCase());
		});
	}
}
