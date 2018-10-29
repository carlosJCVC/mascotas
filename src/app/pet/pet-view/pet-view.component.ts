import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet.interface';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  @Input() mascota:Pet;

  constructor() { }

  ngOnInit() {
  }

}
