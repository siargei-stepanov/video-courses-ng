import { Course } from '../course.model';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent with class', () => {
	let component: CourseItemComponent;

	beforeEach(() => {
		component = new CourseItemComponent();
		component.course = new Course(1, 'title', '2020-01-01', 60, 'description');
		spyOn(component.editCourseEvent, 'emit');
		spyOn(component.deleteCourseEvent, 'emit');
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
