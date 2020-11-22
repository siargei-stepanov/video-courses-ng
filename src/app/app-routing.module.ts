import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{
		path: 'courses',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/list-page/list-page.module').then(
				(m) => m.ListPageModule
			),
	},
	{
		path: 'courses/new',
		loadChildren: () =>
			import('./pages/add-course-page/add-course-page.module').then(
				(m) => m.AddCoursePageModule
			),
	},
	{
		path: 'courses/:id',
		loadChildren: () =>
			import('./pages/add-course-page/add-course-page.module').then(
				(m) => m.AddCoursePageModule
			),
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login-page/login-page.module').then(
				(m) => m.LoginPageModule
			),
	},
	{ path: '', redirectTo: '/courses', pathMatch: 'full' },
	{
		path: '**',
		loadChildren: () =>
			import('./pages/not-found-page/not-found-page.module').then(
				(m) => m.NotFoundPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
