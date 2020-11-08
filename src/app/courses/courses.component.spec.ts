import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { OrderPipe } from './order.pipe';

describe('CoursesComponent', () => {
	let component: CoursesComponent;
	let fixture: ComponentFixture<CoursesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CoursesComponent, OrderPipe]
		}).compileComponents();
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
			spyOn(window.console, 'log');
			component.deleteCourse(1);

			expect(window.console.log).toHaveBeenCalled();
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
