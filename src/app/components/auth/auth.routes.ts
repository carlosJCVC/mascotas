import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardCrmComponent } from '../admin/dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'pets', loadChildren: '../admin/pets/pets.module#PetsModule' },
        { path: 'adoption_requests', loadChildren: '../admin/adoption-request/adoption-request.module#AdoptionRequestModule' },
    ]
}];
