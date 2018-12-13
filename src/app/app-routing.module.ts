  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: '', loadChildren: './pages/guest/guest.module#GuestModule' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
