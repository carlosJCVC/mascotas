import { Component, OnInit } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index-veterinary-clinics',
  templateUrl: './index-veterinary-clinics.component.html',
  styleUrls: ['./index-veterinary-clinics.component.css']
})
export class IndexVeterinaryClinicsComponent implements OnInit {

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
            raza: data[key].raza,
            edad: data[key].edad,
            procedencia: data[key].procedencia,
            sexo: data[key].sexo,
            especie: data[key].especie,
            estado: data[key].estado,
          };
        });

        this.rows = array;
      }
    );
  }

  viewPet(id) {
    this.router.navigate(['/auth/pets/view/' , id]);
  }

}
