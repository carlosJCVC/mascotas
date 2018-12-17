import { Component, ViewChild,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { PetService } from '../../../../services/pet.service';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

    rows: Array<any> = [];
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
    @Output() dup = new EventEmitter();
    searchText: string;

    constructor( public petServ: PetService, private router: Router ) { }

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
                const array = Object.keys(data).map(function(key, index) {
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
                const array = Object.keys(data).map(function(key, index) {
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

                for ( let i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize ; i++) {
                    this.rows = [...this.rows, array[i]];
                }
            }
        );
    }

    onDelete(id) {
        if ( confirm('Estas seguro que deseas eliminar este registro ?') ) {
            this.petServ.delete(id).subscribe(
                res => {
                    location.reload();
                }
            );
        }
    }

    sortData(event) {
        if ( event.active == 'id' ) {
            if (event.direction == 'asc' || event.direction != '') {
                this.rows.reverse();
            } else {
                this.rows.sort();
            }
        }
    }
}
