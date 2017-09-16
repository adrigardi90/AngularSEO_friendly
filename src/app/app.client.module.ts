import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserPrebootModule } from 'preboot/browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'site-builder'}),
    AppModule,
    //We can reply the events from the user in the Server side view
    BrowserPrebootModule.replayEvents()
  ],
  bootstrap: [AppComponent]
})
export class AppClientModule {}
