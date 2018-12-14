import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexVeterinaryClinicsComponent } from './index/index-veterinary-clinics.component';
import { CreateVeterinaryClinicsComponent } from './create/create.component';

const materialWidgetRoutes: Routes = [
  { path: 'list', component: IndexVeterinaryClinicsComponent , data: { animation: 'responsive' }},
  { path: 'create', component: CreateVeterinaryClinicsComponent , data: { animation: 'responsive' }},
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
