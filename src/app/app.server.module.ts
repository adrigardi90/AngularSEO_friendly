import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { ServerPrebootModule } from 'preboot/server';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
        appId: 'site-builder'
    }),
    ServerModule,
    AppModule,
    // We can record the events from the user whereas the SPA is being compiled
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }