import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{
		path: 'list',
		loadChildren: () =>
			import('./pages/list-page/list-page.module').then((m) => m.ListPageModule),
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
	},
	{
		path: 'add-course',
		loadChildren: () =>
			import('./pages/add-course-page/add-course-page.module').then((m) => m.AddCoursePageModule),
	},
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
