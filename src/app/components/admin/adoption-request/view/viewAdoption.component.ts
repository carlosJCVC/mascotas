import { Component, ViewChild, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from '../index/helpers.data';
import { AdoptionService } from '../services/adoption.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-adoption',
    templateUrl: './viewAdoption.component.html',
    styleUrls: ['./viewAdoption.component.scss']
})

export class ViewAdoptionComponent implements OnInit {
    adoptionRequest: any;
    constructor( public adoptionServ: AdoptionService, private router: Router, private activatedRoute: ActivatedRoute ) {}

    ngOnInit() {
        this.adoptionServ.getOne(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
            this.adoptionRequest = response;
        });
    }

}
