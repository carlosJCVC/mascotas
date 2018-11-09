import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PetService } from '../services/pet.service';


@NgModule({
  imports: [
    CommonModule, MaterialModule , RouterModule, FormsModule
  ],
  exports: [
    MaterialModule, PetViewComponent, PetListComponent
  ],
  providers: [
    PetService
  ],
  declarations: [PetViewComponent, PetListComponent]
})
export class PetModule { }
