import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { ListPageComponent } from './list-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ListPageComponent,
	},
	{
		path: 'new',
		loadChildren: () =>
			import('../../pages/add-course-page/add-course-page.module').then(
				(m) => m.AddCoursePageModule
			),
	},
	{
		path: ':id',
		loadChildren: () =>
			import('../../pages/add-course-page/add-course-page.module').then(
				(m) => m.AddCoursePageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ListRoutingModule {}
