import { Component, ViewChild,  OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { AdoptionService } from '../../../../services/adoption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-adoption',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexAdoptionComponent implements OnInit {
    rows: Array<any> = [];
    helpers = ResponsiveTableHelpers;
    pageLength = 0;

    constructor(public adoptionServ: AdoptionService, private router: Router ) { }

    ngOnInit() {
        this.getRows();
    }

    getRows() {
        this.adoptionServ.getAll('creada').subscribe(
            data => {
                const array = Object.keys(data).map(function(key, index) {
                    return {
                        id: data[key].id,
                        nombre: data[key].nombre,
                        ci: data[key].cedulaIdentidad,
                        correo: data[key].correo,
                    };
                });

                this.rows = array;
                this.pageLength = this.rows.length;
            }
        );
    }

    next(event) {
        this.rows = [];
        this.adoptionServ.getAll('creada').subscribe(
            data => {
                const array = Object.keys(data).map(function(key, index) {
                    return {
                      id: data[key].id,
                        nombre: data[key].nombre,
                        ci: data[key].cedulaIdentidad,
                        correo: data[key].correo,
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

    viewAdoptionRequest(id) {
        this.router.navigate(['/auth/adoption_requests/view/' , id]);
    }

    onDelete(id) {
        if (confirm('Estas seguro que deseas eliminar este registro ?')) {
            this.adoptionServ.delete(id).subscribe( res => {
                    location.reload();
                }
            );
        }
    }
}
