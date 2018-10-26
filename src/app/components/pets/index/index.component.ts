import { Component, ViewChild,  OnInit } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { MatDialogConfig, MatDialog, MatSort, MatPaginator, MatTableDataSource, MatIconModule } from '@angular/material'
import { CreateComponent } from '../create/create.component';
import { NotificationService } from '../../../services/notification.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

// export interface PeriodicElement {
//   nombre: string;
//   raza: string;
//   edad: string;
//   procedencia: string;
//   sexo: string;
//   especie: string;
//   estado: string;
//   created_at: string;
// }

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  

  service: PetService;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at', 'actions'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: MatTableDataSource<any>;
  //public dataSource:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  searchKey: string;

  constructor(public serv: PetService, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(
        data => {
          let array = Object.keys(data).map(function(key, index) {
             return {
                id: data[key].id,
                nombre: data[key].nombre,
                raza: data[key].raza,
                edad: data[key].edad,
                procedencia: data[key].procedencia,
                sexo: data[key].sexo,
                especie: data[key].especie,
                estado: data[key].estado,
                created_at: data[key].created_at,
              };
          });
          // let array = data.map(item => {
          //     return {
          //       $key: item.id,
          //     };

          // });
          this.dataSource = new MatTableDataSource(array);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSource.filterPredicate = (data, filter) => {
            return this.displayedColumns.some(ele => {
            console.log(ele);
              return ele != 'actions' && ele != 'id' && ele != 'edad' && ele != 'created_at' && data[ele].toLowerCase().indexOf(filter) != -1;
            });
          };
        //this.dataSource = data;
  	});
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    //this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateComponent, dialogConfig);
  }

  onEdit(row){
    console.log(row);
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateComponent,dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
      this.serv.delete($key);
      this.notificationService.warn('! Deleted successfully');
    }
  }
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {raza: "raza", nombre: 'Hydrogen', edad: "5", procedencia: 'SIN prec', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Helium', edad: "5", procedencia: 'He', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Lithium', edad: "5", procedencia: 'Li', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Beryllium', edad: "5", procedencia: 'Be', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Boron', edad: "5", procedencia: 'B', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Carbon', edad: "5", procedencia: 'C', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Nitrogen', edad: "5", procedencia: 'N', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Oxygen', edad: "5", procedencia: 'O', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
//   {raza: "raza", nombre: 'Fluorine', edad: "5", procedencia: 'F', sexo: 'Macho', especie: 'Especie', estado: 'ACTIVO', created_at: 'H'},
// ];