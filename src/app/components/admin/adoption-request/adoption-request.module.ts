import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdoptionRequestRouterModule } from './adoption-request.router';

import {
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatMenuModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { IndexAdoptionComponent } from './index/indexAdoption.component';
import { CreateComponent } from './create/create.component';
//import { EditComponent } from './edit/edit.component';
import { ViewAdoptionComponent } from './view/viewAdoption.component';
//import { PetService } from './pet.service';

export function highlightJsFactory(): any {
    hljs.registerLanguage('typescript', hljsTypescript);
    return hljs;
}

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatListModule,
        MatStepperModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatChipsModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        HttpClientModule,
        MatCardModule,
        MatMenuModule,
        HighlightJsModule.forRoot({
            provide: HIGHLIGHT_JS,
            useFactory: highlightJsFactory
        }),
        AdoptionRequestRouterModule
    ],

    declarations: [
        IndexAdoptionComponent,
        CreateComponent,
        //EditComponent,
        ViewAdoptionComponent,
    ],

    exports: [
    ],

    providers: [
      //PetService,
      DatePipe
  ],
})

export class AdoptionRequestModule { }
