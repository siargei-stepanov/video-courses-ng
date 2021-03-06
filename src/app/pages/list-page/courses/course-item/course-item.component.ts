import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../../common/course.model';

@Component({
	selector: 'app-course-item',
	templateUrl: './course-item.component.html',
	styleUrls: ['./course-item.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
	@Input() course: Course;
	@Output() editCourseEvent = new EventEmitter<number>();
	@Output() deleteCourseEvent = new EventEmitter<Course>();
	public duration: string;

	constructor() {}

	ngOnInit(): void {}

	public onEdit(id: number): void {
		this.editCourseEvent.emit(id);
	}

	public onDelete(course: Course): void {
		this.deleteCourseEvent.emit(course);
	}
}
