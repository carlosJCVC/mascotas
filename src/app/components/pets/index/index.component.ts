import { Component, ViewChild,  OnInit } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { MatDialogConfig, MatDialog, MatSort, MatPaginator, MatTableDataSource, MatIconModule } from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { NotificationService } from '../../../services/notification.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  service: PetService;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  searchKey: string;

  constructor(public serv: PetService, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(data => {
          let array;
          array = Object.keys(data).map(function(key, index) {
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
          this.dataSource = new MatTableDataSource(array);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          // tslint:disable-next-line:no-shadowed-variable
          this.dataSource.filterPredicate = (data, filter) => {
            return this.displayedColumns.some(ele => {
              // tslint:disable-next-line:max-line-length
              return ele !== 'actions' && ele !== 'id' && ele !== 'edad' && ele !== 'created_at' && data[ele].toLowerCase().indexOf(filter) !== -1;
            });
          };
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreateComponent, dialogConfig);
  }

  onEdit(row) {
    console.log(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreateComponent, dialogConfig);
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.serv.delete($key);
      this.notificationService.warn('! Deleted successfully');
    }
  }
}
