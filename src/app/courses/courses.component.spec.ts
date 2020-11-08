import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from '../common/courses.service';

import { CoursesComponent } from './courses.component';
import { OrderPipe } from './order.pipe';

describe('CoursesComponent', () => {
	let component: CoursesComponent;
	let fixture: ComponentFixture<CoursesComponent>;
	let coursesService: CoursesService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CoursesComponent, OrderPipe],
			providers: [
				{provide: CoursesService, useClass: MockCourseService}
			]
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
		it('should show log', () => {
			spyOn(coursesService, 'removeById');
			spyOn(component, 'searchCourse');
			component.deleteCourse(1);

			expect(coursesService.removeById).toHaveBeenCalledWith(1);
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
	public removeById(id: number) {}
	public getList() {}
}
