import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { IndexComponent } from './components/pets/index/index.component';
//import { CreateComponent } from './components/pets/create/create.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { path: 'lista_mascotas', component: IndexComponent },
  //     { path: 'registrar_mascota', component: CreateComponent },
  //   ]
  // },
    { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },
    { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
    { path: '**', redirectTo: 'auth/dashboard' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      LoginModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }