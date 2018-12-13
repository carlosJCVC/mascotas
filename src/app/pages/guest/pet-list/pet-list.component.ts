import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any;
  searchOpen: boolean;
  especies: any[];
  sexos: any[];
  edades: any[];
  especie: string;
  sexo: string;
  edad: string;
  raza: string;

  constructor(public router: Router, public petserv: PetService) {
    this.searchOpen = false;
    this.especies = [{name: 'Perro', value: 'perro'}, {name: 'Gato', value: 'gato'}, {name: 'Roedor', value: 'roedor'}];
    this.sexos = [{name: 'Hembra', value: 'hembra'}, {name: 'Macho', value: 'macho'}];
    // tslint:disable-next-line:max-line-length
    this.edades = [{name: 'Cachorro(0 - 11 meses)', value: [0, 0]}, {name: 'Joven(1 - 4 años)' , value: [1, 5]}, {name: 'Adulto(5 años en adelante)', value: [5, 100]}];
  }

  ngOnInit() {
    this.petserv.getAll().subscribe(response => {
      this.pets = response;
    });
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  swipeSearch() {
    this.searchOpen = !this.searchOpen;
  }

  filterPets() {
    console.log(this.sexo, this.raza, this.edad, this.especie);
    this.petserv.getAll(this.especie, this.raza, this.sexo, this.edad).subscribe(response => {
      this.pets = response;
    });
  }
}
