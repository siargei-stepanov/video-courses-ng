import { Course } from '../../../common/course.model';
import { OrderPipe } from './order.pipe';

describe('OrderPipe', () => {
	let pipe: OrderPipe;
	let courses: Course[];

	beforeAll(() => {
		pipe = new OrderPipe();
	});
	afterAll(() => {
		pipe = null;
	});
	beforeEach(() => {
		courses = [
			{
				id: 1,
				name: '',
				length: 1,
				isTopRated: false,
				description: '',
				date: '2020-11-20',
			},
			{
				id: 2,
				name: '',
				length: 2,
				isTopRated: false,
				description: '',
				date: '2020-12-01',
			},
			{
				id: 3,
				name: '',
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
	it('should order it by creationDate', () => {
		const result = pipe.transform(courses);
		expect(result.map((course) => course.id)).toEqual([3, 1, 2]);
	});
});
