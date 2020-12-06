import { Course } from '../../../common/course.model';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
	let pipe: FilterPipe;
	let courses: Course[];

	beforeAll(() => {
		pipe = new FilterPipe();
	});
	afterAll(() => {
		pipe = null;
	});
	beforeEach(() => {
		courses = [
			{
				id: 1,
				name: 'Angular mentoring',
				length: 1,
				isTopRated: false,
				description: '',
				date: '2020-11-20',
			},
			{
				id: 2,
				name: 'NodeJS mentoring',
				length: 2,
				isTopRated: false,
				description: '',
				date: '2020-12-01',
			},
			{
				id: 3,
				name: 'HTML mentoring',
				length: 3,
				isTopRated: false,
				description: '',
				date: '2020-09-01',
			},
		];
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return all the courses when query is empty', () => {
		const result = pipe.transform(courses, '');
		expect(result.length).toEqual(3);
	});

	it('should return all courses matching the title', () => {
		const result = pipe.transform(courses, 'mentoring');
		expect(result.length).toEqual(3);
	});
	it('should return no courses matching the title', () => {
		const result = pipe.transform(courses, 'basic');
		expect(result.length).toEqual(0);
	});
	it('should return only 1 course matching the title', () => {
		const result = pipe.transform(courses, 'angular');
		expect(result.length).toEqual(1);
	});
});
