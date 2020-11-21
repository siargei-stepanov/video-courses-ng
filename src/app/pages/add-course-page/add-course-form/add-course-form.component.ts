import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-course-form',
	templateUrl: './add-course-form.component.html',
	styleUrls: ['./add-course-form.component.less'],
})
export class AddCourseFormComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	public onSave(): void {
		console.log('add course. on save');
	}

	public onCancel(): void {
		console.log('add course. on cancel');
	}
}
