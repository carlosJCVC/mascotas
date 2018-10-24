import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/pets/index/index.component';
import { CreateComponent } from './components/pets/create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'lista_mascotas', component: IndexComponent },
      { path: 'registrar_mascota', component: CreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }