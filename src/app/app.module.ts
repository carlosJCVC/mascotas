import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, LayoutModule, AppRoutingModule, HttpClientModule,PetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
