import { Course } from './course.model';
import { OrderPipe } from './order.pipe';

describe('OrderPipe', () => {
	let pipe: OrderPipe, courses: Course[];

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
				title: '',
				duration: 1,
				topRated: false,
				description: '',
				creationDate: '2020-11-20',
			},
			{
				id: 2,
				title: '',
				duration: 2,
				topRated: false,
				description: '',
				creationDate: '2020-12-01',
			},
			{
				id: 3,
				title: '',
				duration: 3,
				topRated: false,
				description: '',
				creationDate: '2020-09-01',
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
