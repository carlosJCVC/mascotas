import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  @Input() mascota: any;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  sendToPetRequest() {
    this.router.navigate(['adoption-request/' + this.mascota.id]);
  }
}
