import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PetService } from './services/pet.service';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { MaterialModule } from "./material.module";

import { InputComponent } from "./components/fields/input/input.component";
import { ButtonComponent } from "./components/fields/button/button.component";
import { SelectComponent } from "./components/fields/select/select.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

//Mascotas
//import { PetModule } from "./components/pets/pet.module";
import { IndexComponent } from './components/pets/index/index.component';
import { CreateComponent } from "./components/pets/create/create.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    //FieldErrorDisplayComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    CreateComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
  ]
})

export class AppModule { }
