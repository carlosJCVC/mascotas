import { Component, ViewChild,  OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { PetService } from '../pet.service';
import {
    MatPaginator,
    MatTableDataSource,
} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

    rows: Array<any> = [];
    showResponsiveTableCode;
    //@ViewChild( MatSort ) sort: MatSort;
    displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at', 'actions'];
    dataSource: MatTableDataSource<any>
    //@ViewChild(MatSort) sort: MatSort;
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
    //@Output() sort = new EventEmitter();
    @Output() dup = new EventEmitter();

    searchKey: string;
    searchText:string;


    
    constructor(
        public petServ: PetService,
        private router: Router,
    ) { }

    ngOnInit(){
        this.getRows();
    }

    viewPet(id) {
        this.router.navigate(['/auth/pets/view/' , id]);
    }

    editPet(id) {
        this.router.navigate(['/auth/pets/edit/' , id]);
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
        filter = this.searchKey.trim().toUpperCase();
        table = document.getElementById("tablePets");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
              if (td.innerText.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
        }
    }

    onDelete(id) {
        if(confirm('Estas seguro que deseas eliminar este registro ?')){
            this.petServ.delete(id).subscribe(
                res => {
                    location.reload();
                }
            );
        }
    }

    sortData(event) {
        if(event.active == "id" ){
            if(event.direction == 'asc' || event.direction != ""){
                this.rows.reverse();
            }
            else{
                this.rows.sort();
            }
        }
    }
}
