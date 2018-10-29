import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './layout/home/home.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';

const routeApp:Routes=[
{
  path:"Home",
  component:HomeComponent
},{
  path:"Lista",
  component:PetListComponent
},{
  path:"Registrar",
  component:HomeComponent
}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routeApp)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
