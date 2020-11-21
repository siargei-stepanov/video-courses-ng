import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../common/components/header/header.module';
import { FooterModule } from '../../common/components/footer/footer.module';
import { BreadcrumbsModule } from '../../common/components/breadcrumbs/breadcrumbs.module';
import { ListPageComponent } from './list-page.component';
import { ListRoutingModule } from './list-page-routing.module';
import { CoursesModule } from './courses/courses.module';

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
