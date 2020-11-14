import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page.component';

const routes: Routes = [
	{ path: '**', component: AddCoursePageComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddCourseRoutingModule { }
