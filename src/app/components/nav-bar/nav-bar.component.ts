import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import {AuthenticationService} from '../../services/authentication/authentication.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  sidenavOpened: boolean;
  constructor(public dialog: MatDialog, public authenticationService: AuthenticationService) {
    this.sidenavOpened = false;
   }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  sidenavCanBeOpen() {
    return this.sidenavOpened && this.authenticationService.isLogged();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      data: {email: '', password: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.authenticationService.post({userNameEmail: result.email, password: result.password }).subscribe((response: any) => {
        sessionStorage.setItem('token', response.token);
      });
    });
  }
}
