import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VeterinaryClinicRouterModule } from './veterinary-clinics.router';

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
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { IndexVeterinaryClinicsComponent } from './index/index-veterinary-clinics.component';
import { CreateVeterinaryClinicsComponent } from './create/create.component';
import { ViewVeterinaryClinicComponent } from './view/view-veterinary-clinic.component';
import { PetService } from '../../../services/pet.service';

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
    VeterinaryClinicRouterModule,
    MatProgressBarModule
  ],

  declarations: [
    IndexVeterinaryClinicsComponent,
    CreateVeterinaryClinicsComponent,
    ViewVeterinaryClinicComponent,
  ],

  exports: [
  ],

  providers: [
    DatePipe
  ],
})

export class VeterinaryClinicsModule { }


