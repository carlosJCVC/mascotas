import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';

import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

import {
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule,
    MatSliderModule,
    MatProgressBarModule,
} from '@angular/material';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({

    declarations: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarComponent,
        SearchBarComponent,
        UserMenuComponent
    ],

    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatChipsModule,
        RouterModule,
        PerfectScrollbarModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatTabsModule,
        MatSliderModule,
        MatProgressBarModule,
    ],


    exports: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarComponent,
        SearchBarComponent,
        UserMenuComponent
    ],

    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class CoreModule { }
