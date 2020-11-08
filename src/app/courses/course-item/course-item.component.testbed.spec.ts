import { Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../course.model';
import { DurationPipe } from '../duration.pipe';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent with testbed', () => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CourseItemComponent, DurationPipe],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseItemComponent);
		component = fixture.componentInstance;
		component.course = new Course(
			1,
			'title',
			'2020-01-01',
			60,
			'description',
			true
		);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('onEdit', () => {
		it('should emit edit event', () => {
			component.editCourseEvent.subscribe((id: number) =>
				expect(id).toEqual(1)
			);
			component.onEdit(1);
		});
	});
	describe('onDelete', () => {
		it('should emit delete event', () => {
			component.deleteCourseEvent.subscribe((course: Course) =>
				expect(course.id).toEqual(2)
			);
			component.onDelete(new Course(2, '', '', 1, '', false));
		});
	});
});

class DurationPipeMock extends Pipe {}
