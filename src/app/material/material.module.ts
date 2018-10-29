import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  imports: [
    MatButtonModule, MatMenuModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule
    ,MatCardModule, FlexLayoutModule
  ],exports:[
    MatButtonModule, MatMenuModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule
    ,MatCardModule, FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule { }
