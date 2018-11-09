import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule
} from '@angular/material';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
    { path: '', component: PetListComponent },
];

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PetListComponent],
    exports: [RouterModule],
    providers: []
})
export class GuestModule { }
