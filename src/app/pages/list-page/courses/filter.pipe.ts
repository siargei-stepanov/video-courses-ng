import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../common/course.model';

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
			return v.name.toLowerCase().includes(query.toLowerCase());
		});
	}
}
