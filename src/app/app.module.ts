import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsModule } from './common/components/breadcrumbs/breadcrumbs.module';
import { HeaderModule } from './common/components/header/header.module';
import { FooterModule } from './common/components/footer/footer.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BreadcrumbsModule,
		HeaderModule,
		FooterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
