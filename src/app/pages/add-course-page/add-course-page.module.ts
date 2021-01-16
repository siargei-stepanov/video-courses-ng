import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { AddCourseRoutingModule } from './add-course-page-routing.module';
import { HeaderModule } from '../../common/components/header/header.module';
import { FooterModule } from '../../common/components/footer/footer.module';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../common/components/breadcrumbs/breadcrumbs.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
		ReactiveFormsModule,
		MatChipsModule,
		MatFormFieldModule,
		MatIconModule,
		MatAutocompleteModule,
	],
})
export class AddCoursePageModule {}
