import { Course } from '../course.model';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent with class', () => {
	let component: CourseItemComponent;

	beforeEach(() => {
		component = new CourseItemComponent();
		component.course = new Course(
			1,
			'title',
			'2020-01-01',
			60,
			'description',
			true
		);
		spyOn(component.editCourseEvent, 'emit');
		spyOn(component.deleteCourseEvent, 'emit');
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('onEdit', () => {
		it('should emit edit event', () => {
			component.onEdit(1);
			expect(component.editCourseEvent.emit).toHaveBeenCalledWith(1);
		});
	});
	describe('onDelete', () => {
		it('should emit delete event', () => {
			component.onDelete(2);
			expect(component.deleteCourseEvent.emit).toHaveBeenCalledWith(2);
		});
	});
});
