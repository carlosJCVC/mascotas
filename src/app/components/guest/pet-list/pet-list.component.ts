import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../admin/pets/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any;
  searchOpen: boolean;
  especies: string[];
  sexos: string[];
  edades: string[];
  especie: string;
  sexo: string;
  edad: string;

  constructor(public router: Router, public petserv: PetService) {
    this.searchOpen = false;
    this.especies = ["Perro","Gato","Roedor"]; 
    this.sexos = ["Macho","Hembra"];
    this.edades = ['Cachorro(0 - 11 meses)', 'Joven(1 - 4 años)', 'Adulto(5 años en adelante)'];

  }

  ngOnInit() {
    this.petserv.getAll().subscribe(response => {
      this.pets = response;
    });
  }
  goToLogin() {
    this.router.navigate(['login'])
  }
  swipeSearch() {
    this.searchOpen = !this.searchOpen;
  }
}
