import { Component, ViewChild,  OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { AdoptionService } from '../services/adoption.service';
import {
    MatDialogConfig,
    MatDialog,
    MatSort,
    MatPaginator,
    MatTableDataSource,
    MatIconModule
} from '@angular/material';
import { Router } from '@angular/router';

// import { NotificationService } from '../../../../services/notification.service';
// import { DialogService } from '../../../../services/dialog.service';

@Component({
  selector: 'app-index-adoption',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexAdoptionComponent implements OnInit { 
	
	rows: Array<any> = [];
	helpers = ResponsiveTableHelpers;
	pageLength = 0;
	searchKey: string;
	
	constructor(
		public adoptionServ: AdoptionService,
		private router: Router,
	) { }

	ngOnInit(){
		this.getRows();
    }

    getRows() {
    	this.adoptionServ.getAll().subscribe(
            data => {
                let array = Object.keys(data).map(function(key, index) {
                    return {
                        id: data[key].id,
                        nombre: data[key].nombre,
                        ci: data[key].ci,
                        correo: data[key].correo,
                        direccion: data[key].direccion,
                        provincia: data[key].provincia,
                        esta_civil: data[key].est_civil,
                        masc_act: data[key].masc_act,
                        masc_este: data[key].masc_este,
                        masc_ant: data[key].masc_ant,
                        masc_visita: data[key].masc_visita,
                    };
                });

                this.rows = array;
                this.pageLength = this.rows.length;
            }
        );
    }

    next(event) {
        this.rows = [];
        this.adoptionServ.getAll().subscribe(
            data => {
                let array = Object.keys(data).map(function(key, index) {
                    return {
                      id: data[key].id,
                        nombre: data[key].nombre,
                        ci: data[key].ci,
                        correo: data[key].correo,
                        direccion: data[key].direccion,
                        provincia: data[key].provincia,
                        esta_civil: data[key].est_civil,
                        masc_act: data[key].masc_act,
                        masc_este: data[key].masc_este,
                        masc_ant: data[key].masc_ant,
                        masc_visita: data[key].masc_visita,
                    }
                });

                if (event.pageSize > array.length) {
                    event.pageSize = array.length;
                }

                for ( var i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex*event.pageSize ;i++) {
                    this.rows = [...this.rows, array[i]];
                }
            }
        );
    }

    viewAdoptionRequest(id) {
        this.router.navigate(['/auth/pets/view/' , id]);

    }
    editAdoptionRequest(id) {
        this.router.navigate(['/auth/pets/edit/' , id]);
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }
    
    applyFilter() {
        var filter, table, tr, td, i;
        filter = this.searchKey.trim().toLowerCase();
        table = document.getElementById("tableAdoptionRequest");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            console.log(td.spam);
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
        }
    }

    onDelete(id) {
        if(confirm('Estas seguro que deseas eliminar este registro ?')){
            this.adoptionServ.delete(id).subscribe(
                res => {
                    location.reload();
                }
            );
        }
    }
}