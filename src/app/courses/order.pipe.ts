import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course.model';

@Pipe({
	name: 'order',
})
export class OrderPipe implements PipeTransform {
	transform(courses: Course[]): Course[] {
		return courses.sort(
			(a, b) =>
				new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
		);
	}
}
