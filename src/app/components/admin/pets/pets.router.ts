import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

const materialWidgetRoutes: Routes = [
    { path: 'list', component: IndexComponent ,data: { animation: 'responsive' }},
    { path: 'create', component: CreateComponent ,data: { animation: 'responsive' }}
];

@NgModule({
    imports: [
        RouterModule.forChild(materialWidgetRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PetsRouterModule {}