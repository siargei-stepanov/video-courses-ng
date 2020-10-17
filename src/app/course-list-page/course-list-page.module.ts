import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListPageComponent } from './course-list-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  exports: [
    CourseListPageComponent
  ],
  declarations: [
    CourseListPageComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseListPageModule { }
