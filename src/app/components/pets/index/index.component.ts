import { Component, ViewChild,  OnInit } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  nombre: string;
  raza: string;
  edad: string;
  procedencia: string;
  sexo: string;
  especie: string;
  estado: string;
  created_at: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  

  service: PetService;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //public dataSource:any;

  @ViewChild( MatPaginator ) paginator: MatPaginator;
  
  constructor(public serv: PetService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(data => {
      this.dataSource.paginator = this.paginator;
      //this.dataSource = data;
      console.log(data);
  	});
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {raza: "raza", nombre: 'Hydrogen', edad: "5", procedencia: 'SIN prec', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Helium', edad: "5", procedencia: 'He', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Lithium', edad: "5", procedencia: 'Li', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Beryllium', edad: "5", procedencia: 'Be', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Boron', edad: "5", procedencia: 'B', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Carbon', edad: "5", procedencia: 'C', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Nitrogen', edad: "5", procedencia: 'N', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Oxygen', edad: "5", procedencia: 'O', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Fluorine', edad: "5", procedencia: 'F', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Neon', edad: "5", procedencia: 'Ne', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Sodium', edad: "5", procedencia: 'Na', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Magnesium', edad: "5", procedencia: 'Mg', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Aluminum', edad: "5", procedencia: 'Al', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Silicon', edad: "5", procedencia: 'Si', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Phosphorus', edad: "5", procedencia: 'P', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Sulfur', edad: "5", procedencia: 'S', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Chlorine', edad: "5", procedencia: 'Cl', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Argon', edad: "5", procedencia: 'Ar', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Potassium', edad: "5", procedencia: 'K', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
  {raza: "raza", nombre: 'Calcium', edad: "5", procedencia: 'Ca', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
];