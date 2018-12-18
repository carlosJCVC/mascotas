import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexVeterinaryClinicComponent } from './index/index-veterinary-clinics.component';
import { CreateVeterinaryClinicComponent } from './create/create.component';
import { ViewVeterinaryClinicComponent } from './view/view-veterinary-clinic.component';
import { EditVeterinaryClinicComponent } from './edit/edit.component';

const materialWidgetRoutes: Routes = [
  { path: 'list', component: IndexVeterinaryClinicComponent , data: { animation: 'responsive' }},
  { path: 'create', component: CreateVeterinaryClinicComponent , data: { animation: 'responsive' }},
  { path: 'edit/:id', component: EditVeterinaryClinicComponent , data: { animation: 'responsive' }},
  { path: 'view/:id', component: ViewVeterinaryClinicComponent, data: {animation: 'responsive'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class VeterinaryClinicRouterModule { }
