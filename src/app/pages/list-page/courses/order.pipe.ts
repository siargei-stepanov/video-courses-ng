import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../common/course.model';

@Pipe({
	name: 'order',
})
export class OrderPipe implements PipeTransform {
	transform(courses: Course[]): Course[] {
		return courses.sort(
			(a, b) =>
				new Date(a.date).getTime() - new Date(b.date).getTime()
		);
	}
}
