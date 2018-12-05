import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatTabsModule, MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetService } from 'src/app/services/pet.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './adoption-request/create/create.component';


const routes: Routes = [
    { path: '', component: PetListComponent },
    { path: 'adoption-request/:id', component: CreateComponent}
];

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PetListComponent, PetViewComponent, CreateComponent],
    exports: [RouterModule],
    providers: [PetService]
})
export class GuestModule { }
