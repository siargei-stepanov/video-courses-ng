import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [CommonModule, LoginPageRoutingModule, HeaderModule, FooterModule],
})
export class LoginPageModule {}
