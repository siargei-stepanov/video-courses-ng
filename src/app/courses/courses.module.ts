import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
	exports: [CoursesComponent],
	declarations: [CoursesComponent, CourseItemComponent, SearchComponent],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class CoursesModule { }
