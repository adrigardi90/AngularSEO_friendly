import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
  	HomeRoutingModule
  ],
  declarations: [
  	HomeComponent
  ],
  providers: []
})
export class HomeModule {}
