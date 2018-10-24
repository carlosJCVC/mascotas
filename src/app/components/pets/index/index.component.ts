import { Component, OnInit } from '@angular/core';
import { PetService } from '../../../services/pet.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  
  service: PetService;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at'];
  public dataSource:any;

  constructor(public serv: PetService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(data => {
      this.dataSource = data;
      console.log(data);
  	});
  }

}