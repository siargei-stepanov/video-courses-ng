import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { UserNameComponent } from './user-name/user-name.component';
import { LogoutComponent } from './logout/logout.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserNameComponent,
    LogoutComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
