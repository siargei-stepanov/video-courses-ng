import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from '../../../common/services/courses.service';
import { Course } from '../../../common/course.model';

import { CoursesComponent } from './courses.component';
import { OrderPipe } from './order.pipe';

describe('CoursesComponent', () => {
	let component: CoursesComponent;
	let fixture: ComponentFixture<CoursesComponent>;
	let coursesService: CoursesService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CoursesComponent, OrderPipe],
			providers: [{ provide: CoursesService, useClass: MockCourseService }],
		}).compileComponents();

		coursesService = TestBed.inject(CoursesService);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('editCourse', () => {
		it('should show log', () => {
			spyOn(window.console, 'log');
			component.editCourse(1);

			expect(window.console.log).toHaveBeenCalled();
		});
	});

	describe('deleteCourse', () => {
		it('should delete the course', () => {
			const course = new Course(1, '', '', 1, '', false);
			spyOn(window, 'confirm').and.returnValue(true);
			spyOn(coursesService, 'remove');
			spyOn(component, 'searchCourse');
			component.deleteCourse(course);

			expect(coursesService.remove).toHaveBeenCalledWith(course);
			expect(component.searchCourse).toHaveBeenCalled();
		});
	});

	describe('loadMore', () => {
		it('should show log', () => {
			spyOn(window.console, 'log');
			component.loadMore();

			expect(window.console.log).toHaveBeenCalled();
		});
	});
});

class MockCourseService {
	// tslint:disable-next-line
	public removeById(id: number) {}
	// tslint:disable-next-line
	public remove(course: Course) {}
	// tslint:disable-next-line
	public getList() {}
}
