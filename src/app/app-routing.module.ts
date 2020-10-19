import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{
		path: 'list',
		loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule)
	},
	{ path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
