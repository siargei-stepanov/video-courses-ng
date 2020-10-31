import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
	let pipe;
	beforeAll(() => {
		pipe = new DurationPipe();
	});
	afterAll(() => {
		pipe = null;
	});
	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should format only minutes', () => {
		expect(pipe.transform('30')).toEqual('30 min');
	});
});
