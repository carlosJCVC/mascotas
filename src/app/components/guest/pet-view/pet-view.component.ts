import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  @Input() mascota: any;

  constructor() { }

  ngOnInit() {
  }

}
