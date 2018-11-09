import { Component, ViewChild,  OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { PetService } from '../pet.service';
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
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

    rows: Array<any> = [];
    showResponsiveTableCode;
    //@ViewChild( MatSort ) sort: MatSort;
    @ViewChild( MatPaginator ) paginator: MatPaginator;
    pageLength = 0;
    pageSize = 5;
    helpers = ResponsiveTableHelpers;
    @Input() status;
    @Input() actionStatus;
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() view = new EventEmitter();
    @Output() page = new EventEmitter();
    @Output() sort = new EventEmitter();
    @Output() dup = new EventEmitter();

    searchKey: string;

    constructor(
        public petServ: PetService,
        private router: Router,
    ) { }

    ngOnInit(){
        this.getRows();
        //         this.listData = new MatTableDataSource(array);
        //         this.listData.sort = this.sort;
        //         this.listData.paginator = this.paginator;
        //         this.listData.filterPredicate = (data, filter) => {
        //             return this.displayedColumns.some(ele => {
        //                 return ele != 'actions' && ele != 'id' && ele != 'edad' && ele != 'created_at' && data[ele].toLowerCase().indexOf(filter) != -1;
        //             });
        //         };
        //     });
    }
    viewPet(id) {
        // console.log(id);
        // this.view.emit(id);
        this.router.navigate(['/auth/pets/view/' , id]);

    }

    getRows() {
        this.petServ.getAll().subscribe(
            data => {
                let array = Object.keys(data).map(function(key, index) {
                    return {
                        id: data[key].id,
                        nombre: data[key].nombre,
                        raza: data[key].raza,
                        edad: data[key].edad,
                        procedencia: data[key].procedencia,
                        sexo: data[key].sexo,
                        especie: data[key].especie,
                        estado: data[key].estado,
                        created_at: data[key].created_at,
                        };
                });

                this.rows = array;
                this.pageLength = this.rows.length;
            }
        );
    }

    next(event) {
        this.rows = [];
        this.petServ.getAll().subscribe(
            data => {
                let array = Object.keys(data).map(function(key, index) {
                    return {
                        id: data[key].id,
                        nombre: data[key].nombre,
                        raza: data[key].raza,
                        edad: data[key].edad,
                        procedencia: data[key].procedencia,
                        sexo: data[key].sexo,
                        especie: data[key].especie,
                        estado: data[key].estado,
                        created_at: data[key].created_at,
                        };
                }); 

                if (event.pageSize > array.length) {
                    event.pageSize = array.length;
                }

                for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
                    this.rows = [...this.rows,array[i]];        
                }
            }
        );
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }
    
    applyFilter() {
        var filter, table, tr, td, i;
        filter = this.searchKey.trim().toLowerCase();
        table = document.getElementById("tablePets");
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
        
        //this.listData.filter = this.searchKey.trim().toLowerCase();
    }

   
    // onCreate() {
    //     this.petServ.initializeFormGroup();
    //     const dialogConfig = new MatDialogConfig();
    //     dialogConfig.disableClose = true;
    //     dialogConfig.autoFocus = true;
    //     dialogConfig.width = "60%";
    //     this.dialog.open(CreateComponent,dialogConfig);
    // }

    // onEdit(row) {
    //     this.petServ.populateForm(row);
    //     const dialogConfig = new MatDialogConfig();
    //     dialogConfig.disableClose = true;
    //     dialogConfig.autoFocus = true;
    //     dialogConfig.width = "60%";
    //     this.dialog.open(CreateComponent,dialogConfig);
    // }

    // onDelete($key) {
    //     this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    //         .afterClosed().subscribe(res =>{
    //         if(res){
    //             this.petServ.delete($key);
    //             this.notificationService.warn('! Deleted successfully');
    //         }
    //     });
    // }
}