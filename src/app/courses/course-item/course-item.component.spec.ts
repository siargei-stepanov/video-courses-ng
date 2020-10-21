import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../course.model';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
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
});
