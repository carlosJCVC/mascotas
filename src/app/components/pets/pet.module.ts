import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    IndexComponent,
    CreateComponent
  ],
  exports: [
    CommonModule,
    IndexComponent,
    CreateComponent
  ]
})

export class PetModule { }
