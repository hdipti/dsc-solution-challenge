import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { LoggerService } from './core/logger/logger.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        LoggerModule.forRoot({
            serverLoggingUrl: '/api/logs', 
            level: NgxLoggerLevel.DEBUG, 
            serverLogLevel: NgxLoggerLevel.ERROR
        })
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        LoggerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
