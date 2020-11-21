import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { AddCourseRoutingModule } from './add-course-page-routing.module';
import { HeaderModule } from '../../common/components/header/header.module';
import { FooterModule } from '../../common/components/footer/footer.module';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../common/components/breadcrumbs/breadcrumbs.module';

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
