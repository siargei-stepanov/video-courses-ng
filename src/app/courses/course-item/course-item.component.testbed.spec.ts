import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../course.model';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent with testbed', () => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CourseItemComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseItemComponent);
		component = fixture.componentInstance;
		component.course = new Course(1, 'title', '2020-01-01', 60, 'description');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('ngOnInit', () => {
		describe('duration format', () => {
			it('should format to hours', () => {
				component.course.duration = 60;
				component.ngOnInit();

				expect(component.duration).toEqual('1h 0m');
			});
			it('should format to hours and minutes', () => {
				component.course.duration = 70;
				component.ngOnInit();

				expect(component.duration).toEqual('1h 10m');
			});
		});
	});

	describe('onEdit', () => {
		it('should emit edit event', () => {
			component.editCourseEvent.subscribe((id: number) => expect(id).toEqual(1));
			component.onEdit(1);
		});
	});
	describe('onDelete', () => {
		it('should emit delete event', () => {
			component.deleteCourseEvent.subscribe((id: number) => expect(id).toEqual(2));
			component.onEdit(2);
		});
	});
});
