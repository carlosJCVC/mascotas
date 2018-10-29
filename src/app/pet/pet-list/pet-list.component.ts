import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets:Pet[];
  constructor(private mascotaService:PetService) { }

  ngOnInit() {
    this.mascotaService.getAll().subscribe(
      data=>{
        this.pets=data;
      }
    );
  }

}
