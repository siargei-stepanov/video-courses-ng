import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../course.model';

@Component({
	selector: 'app-course-item',
	templateUrl: './course-item.component.html',
	styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent implements OnInit {
	@Input() course: Course;
	@Output() editCourseEvent = new EventEmitter<number>();
	@Output() deleteCourseEvent = new EventEmitter<number>();
	public duration: string;

	constructor() { }

	ngOnInit(): void {
		this.duration = `${Math.floor(this.course.duration / 60)}h ${this.course.duration % 60}m`;
	}

	public onEdit(id: number): void {
		this.editCourseEvent.emit(id);
	}

	public onDelete(id: number): void {
		this.deleteCourseEvent.emit(id);
	}
}
