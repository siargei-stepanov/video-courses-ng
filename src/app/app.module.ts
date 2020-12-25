import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsModule } from './common/components/breadcrumbs/breadcrumbs.module';
import { HeaderModule } from './common/components/header/header.module';
import { FooterModule } from './common/components/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './common/auth-interceptor';
import { LoaderModule } from './common/components/loader/loader.module';
import { LoaderInterceptor } from './common/components/loader/loader.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BreadcrumbsModule,
		HeaderModule,
		FooterModule,
		LoaderModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
