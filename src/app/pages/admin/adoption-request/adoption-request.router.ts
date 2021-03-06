import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAdoptionComponent } from './index/indexAdoption.component';
import { ViewAdoptionComponent } from './view/viewAdoption.component';

const materialWidgetRoutes: Routes = [
    { path: 'list', component: IndexAdoptionComponent , data: { animation: 'responsive' }},
    { path: 'view/:id', component: ViewAdoptionComponent, data: {animation: 'responsive'}},
];

@NgModule({
    imports: [
        RouterModule.forChild(materialWidgetRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdoptionRequestRouterModule { }
