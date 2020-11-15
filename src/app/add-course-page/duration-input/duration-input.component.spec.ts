import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationInputComponent } from './duration-input.component';

describe('DurationInputComponent', () => {
	let component: DurationInputComponent;
	let fixture: ComponentFixture<DurationInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DurationInputComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DurationInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should format duration on change', () => {
		component.duration = '123';
		component.onDurationChange();

		expect(component.durationFormatted).toEqual('2 h 3 min');
	})
});
