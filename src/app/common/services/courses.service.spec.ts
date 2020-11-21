import { TestBed } from '@angular/core/testing';
import { Course } from 'src/app/common/course.model';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
	let service: CoursesService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CoursesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should get the list of the courses', () => {
		expect(service.getList().length).toEqual(3);
	});

	it('should create a new course', () => {
		const courses = service.create(
			new Course(5, 'test', '2020-01-01', 10, 'test', true)
		);
		expect(courses.length).toEqual(4);
	});

	it('should get the course by id', () => {
		const courseValue = service.getById(1);
		expect(courseValue.id).toEqual(1);
	});

	it('should remove the course by id', () => {
		const courses = service.removeById(1);
		expect(courses.length).toEqual(2);
	});

	it('should remove the course', () => {
		const courses = service.remove(new Course(1, '', '', 10, '', false));
		expect(courses.length).toEqual(2);
	});

	it('should update the course', () => {
		service.update(new Course(2, 'sample', '2020-10-10', 15, 'desc', false));
		const courseValue = service.getById(2);
		expect(courseValue.title).toEqual('sample');
	});
});
