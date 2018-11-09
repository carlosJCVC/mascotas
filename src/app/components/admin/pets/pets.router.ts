import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const materialWidgetRoutes: Routes = [
    { path: 'list', component: IndexComponent , data: { animation: 'responsive' }},
    { path: 'create', component: CreateComponent , data: { animation: 'responsive' }},
    { path: 'edit/:id', component: EditComponent, data: {animation: 'responsive'}},
    { path: 'view/:id', component: ViewComponent, data: {animation: 'responsive'}},
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
