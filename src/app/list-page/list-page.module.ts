import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { ListPageComponent } from './list-page.component';
import { ListRoutingModule } from './list-page-routing.module';
import { CoursesModule } from '../courses/courses.module';

@NgModule({
	declarations: [
		ListPageComponent
	],
	imports: [
		CommonModule,
		HeaderModule,
		BreadcrumbsModule,
		ListRoutingModule,
		CoursesModule,
		FooterModule,
	]
})
export class ListPageModule { }
