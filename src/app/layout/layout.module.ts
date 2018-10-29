import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,MaterialModule,RouterModule 
  ],
  exports:[
    HeaderComponent, HomeComponent, FooterComponent, MaterialModule
  ],
  declarations: [HeaderComponent, HomeComponent, FooterComponent]
})
export class LayoutModule { }
