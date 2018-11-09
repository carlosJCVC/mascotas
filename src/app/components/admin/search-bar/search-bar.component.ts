import { Component, OnInit, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'admin-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
    public bigMenu;
    @Input() open;
    constructor() { }

    ngOnInit() {}

}
