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

  helpers = ResponsiveTableHelpers;
    pageLength = 0;
    searchKey: string;
    private id;
    public row;

    constructor(
        public adoptionServ: AdoptionService,
        private router: Router,
        private activatedRoute: ActivatedRoute,

    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.getRow(this.id);
        });
    }

    getRow(id) {
        this.adoptionServ.getOne(id).subscribe(response => {
            this.row = response;
        });
    }

    onSubmit() {

    }


    next(event) {

    }

    viewAdoptionRequest(id) {
        this.router.navigate(['/auth/pets/view/', id]);

    }
    editAdoptionRequest(id) {
        this.router.navigate(['/auth/pets/edit/', id]);
    }

    onSearchClear() {
        this.searchKey = '';
        this.applyFilter();
    }

    applyFilter() {
        let filter, table, tr, td, i;
        filter = this.searchKey.trim().toLowerCase();
        table = document.getElementById('tableAdoptionRequest');
        tr = table.getElementsByTagName('tr');
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName('td')[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }


    onCancel() {
        window.history.back();
    }
}
