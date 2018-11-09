import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './components/login/login.module';

const routes: Routes = [
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
