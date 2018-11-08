import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { InputComponent } from './components/fields/input/input.component';
import { ButtonComponent } from './components/fields/button/button.component';
import { SelectComponent } from './components/fields/select/select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { IndexComponent } from './components/pets/index/index.component';
import { CreateComponent } from './components/pets/create/create.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { AuthenticationService } from './services/authentication/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    CreateComponent,
    IndexComponent,
    LoginDialogComponent
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
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    LoginDialogComponent
  ]
})

export class AppModule { }
