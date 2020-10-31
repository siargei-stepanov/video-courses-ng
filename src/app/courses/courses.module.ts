import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { NoDataComponent } from './no-data/no-data.component';
import { HighlightDirective } from './course-item/highlight.directive';
import { DurationPipe } from './duration.pipe';
import { OrderPipe } from './order.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
	exports: [CoursesComponent],
	declarations: [
		CoursesComponent,
		CourseItemComponent,
		SearchComponent,
		NoDataComponent,
		HighlightDirective,
		DurationPipe,
		OrderPipe,
		FilterPipe,
	],
	imports: [CommonModule, FormsModule],
})
export class CoursesModule {}
