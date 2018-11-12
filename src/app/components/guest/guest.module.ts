import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule
} from '@angular/material';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetService } from 'src/app/services/pet.service';

const routes: Routes = [
    { path: '', component: PetListComponent },
];

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PetListComponent, PetViewComponent],
    exports: [RouterModule],
    providers: [PetService]
})
export class GuestModule { }
