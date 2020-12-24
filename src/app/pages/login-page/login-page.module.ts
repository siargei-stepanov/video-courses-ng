import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { HeaderModule } from '../../common/components/header/header.module';
import { FooterModule } from '../../common/components/footer/footer.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginPageComponent, LoginFormComponent],
	imports: [
		CommonModule,
		LoginPageRoutingModule,
		HeaderModule,
		FooterModule,
		HttpClientModule,
		FormsModule,
	],
})
export class LoginPageModule {}
