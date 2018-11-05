import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';

@Component({
    selector: 'admin-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    public menus = menus;

    constructor() { }

    ngOnInit() {
    }

}
