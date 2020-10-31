import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
	let pipe: DurationPipe;
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

	it('should format hours and minutes', () => {
		expect(pipe.transform('80')).toEqual('1 h 20 min');
	});

	it('should return the same value for the non number format', () => {
		expect(pipe.transform('abc')).toEqual('abc');
	});
});
