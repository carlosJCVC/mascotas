import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PetService } from './services/pet.service';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material.module";

import { InputComponent } from "./components/fields/input/input.component";
import { ButtonComponent } from "./components/fields/button/button.component";
import { SelectComponent } from "./components/fields/select/select.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

//Mascotas
// import { IndexComponent } from './components/pets/index/index.component';
// import { CreateComponent } from "./components/pets/create/create.component";
// import { PetsComponent } from "./components/pets/pets.component";
// import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { CoreModule } from './components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    // InputComponent,
    // ButtonComponent,
    // SelectComponent,
    // DynamicFieldDirective,
    // DynamicFormComponent,
    // CreateComponent,
    // IndexComponent,
    // MatConfirmDialogComponent,
    // PetsComponent,
  ],
  imports: [
    BrowserModule,
    // MaterialModule,
    // BrowserModule,
    //LayoutModule,
    BrowserAnimationsModule,
    //FormsModule,
    //ReactiveFormsModule,
    AppRoutingModule,
    //HttpClientModule,
    //CommonModule,
    CoreModule,
  ],
  providers: [
      // PetService,
      // DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // CreateComponent,
    // InputComponent,
    // ButtonComponent,
    // SelectComponent,
    // MatConfirmDialogComponent
  ]
})

export class AppModule { }
