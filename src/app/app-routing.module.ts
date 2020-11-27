import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './common/services/auth.guard';

const routes: Routes = [
	{
		path: 'courses',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('./pages/list-page/list-page.module').then(
				(m) => m.ListPageModule
			),
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login-page/login-page.module').then(
				(m) => m.LoginPageModule
			),
	},
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
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
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
