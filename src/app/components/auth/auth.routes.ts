import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardCrmComponent } from '../admin/dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'pets', loadChildren: '../../pages/admin/pets/pets.module#PetsModule' },
        { path: 'adoption_requests', loadChildren: '../../pages/admin/adoption-request/adoption-request.module#AdoptionRequestModule' },
        { path: 'clinics', loadChildren: '../../pages/admin/veterinary-clinics/veterinary-clinics.module#VeterinaryClinicsModule' },
    ]
}];
