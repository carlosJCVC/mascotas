import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any[];
  constructor(private mascotaService: PetService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.pets = [{'raza': 'Pomeriano', 'especie': 'perro', 'edad': '11', 'sexo': 'macho', 'enfermedades': '', 'descripcion': '', 'procedencia': '' , 'imagen': 'https://http2.mlstatic.com/hermosos-cachorros-pomerania-D_NQ_NP_817225-MCO25412038332_032017-F.jpg' }];
    this.mascotaService.getAll().subscribe(
      data => {
        this.pets = data;
      }
    );
  }

}
