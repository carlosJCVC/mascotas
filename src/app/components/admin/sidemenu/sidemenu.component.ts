import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'admin-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {

    @Input() iconOnly;
    public menus = menus;

    constructor() {
        this.iconOnly = false;
     }

    ngOnInit() {
    }

}
