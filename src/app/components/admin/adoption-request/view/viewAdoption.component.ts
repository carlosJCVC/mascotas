import { Component, ViewChild, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from '../index/helpers.data';
import { AdoptionService } from '../services/adoption.service';
import {
    MatDialogConfig,
    MatDialog,
    MatSort,
    MatPaginator,
    MatTableDataSource,
    MatIconModule
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

// import { NotificationService } from '../../../../services/notification.service';
// import { DialogService } from '../../../../services/dialog.service';

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
        // this.row = this.helpers.rows.find(x => x.id === id);
        // console.log(this.row);
        
        // this.adoptionServ.getOne(id).subscribe(one = > {
        //     console.log(one);
        //     this.row=one;
        // });

        this.adoptionServ.getOne(id).subscribe(one=>{
            alert();
            let adoption=one;
            this.row=adoption;
        })

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
