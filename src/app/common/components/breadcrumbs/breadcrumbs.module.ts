import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
	exports: [BreadcrumbsComponent],
	declarations: [BreadcrumbsComponent],
	imports: [CommonModule, RouterModule],
})
export class BreadcrumbsModule {}
