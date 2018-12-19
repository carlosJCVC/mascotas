import { Component, OnInit } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index-veterinary-clinics',
  templateUrl: './index-veterinary-clinics.component.html',
  styleUrls: ['./index-veterinary-clinics.component.scss']
})
export class IndexVeterinaryClinicComponent implements OnInit {

  helpers = ResponsiveTableHelpers;
  rows: Array<any> = [];

  constructor( public clinicServ: VeterinaryClinicService, private router: Router ) { }

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    this.clinicServ.getAll().subscribe(
      data => {
        const array = Object.keys(data).map(function(key, index) {
          return {
            id: data[key].id,
            nombre: data[key].nombre,
            direccion: data[key].direccion,
          };
        });

        this.rows = array;
      }
    );
  }

  viewClinic(id) {
    this.router.navigate(['/auth/clinics/view/' , id]);
  }

  editClinic(id) {
    this.router.navigate(['/auth/clinics/edit/' , id]);
  }

  onDelete(id) {
    if(confirm('Estas seguro que deseas eliminar este registro ?')){
      this.clinicServ.delete(id).subscribe(
        res => {
          this.getRows();
          this.router.navigate(['/auth/clinics/list']);
        }
      );
    }
  }
}
