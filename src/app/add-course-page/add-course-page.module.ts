import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { AddCourseRoutingModule } from './add-course-page-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
	declarations: [AddCoursePageComponent],
	imports: [CommonModule, AddCourseRoutingModule, HeaderModule, FooterModule],
})
export class AddCoursePageModule {}
