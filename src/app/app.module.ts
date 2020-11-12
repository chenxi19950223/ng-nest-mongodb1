import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import zh from '@angular/common/locales/zh';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { SimpleReuseStrategy } from './SimpleReuseStrategy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconsProviderModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientJsonpModule,
        AngularSvgIconModule.forRoot()
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
