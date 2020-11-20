import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { AddCourseRoutingModule } from './add-course-page-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
	declarations: [
		AddCoursePageComponent,
		AddCourseFormComponent,
		DurationInputComponent,
	],
	imports: [
		CommonModule,
		AddCourseRoutingModule,
		HeaderModule,
		BreadcrumbsModule,
		FooterModule,
		FormsModule,
	],
})
export class AddCoursePageModule {}
