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
  constructor(public router: Router, public petserv: PetService) { }

  ngOnInit() {
    this.petserv.getAll().subscribe(response => {
      console.log(response);
      this.pets = response;
    });
  }
  goToLogin() {
    this.router.navigate(['login'])
  }
}
