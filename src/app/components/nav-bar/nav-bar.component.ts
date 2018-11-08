import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  sidenavOpened: boolean;
  email: string;
  password: string;
  constructor(public dialog: MatDialog) {
    this.sidenavOpened = false;
   }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      data: {email: '', password: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result.email;
      this.password = result.password;
      console.log(this.password);
    });
  }
}
