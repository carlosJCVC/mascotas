import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'admin-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

    @Input() sidenav;
    @Input() sidebar;
    @Input() drawer;
    @Input() matDrawerShow;

    searchOpen: boolean;
    toolbarHelpers = ToolbarHelpers;
    constructor() {
        this.searchOpen  = false;
     }

    ngOnInit() {
    }

}
