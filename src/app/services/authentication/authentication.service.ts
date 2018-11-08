import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;
  url: string;
  constructor(public httpClient: HttpClient) {
    this.user = null;
    this.url = environment.petsAPI + '/api/mascotas';
  }

  public post(data: any) {
    return this.httpClient.post(this.url, data);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.user = null;
  }

  isLogged(): boolean {
    let token;
    token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  getUser() {
    if (this.isLogged()) {
      let data;
      data = jwt_decode(sessionStorage.getItem('token'));
      this.user = new User();
      this.user.userId = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      this.user.userName = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.user.email = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
      this.user.userRole = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      // this.user.userRole = "Admin";
      return this.user;
    }
    return null;
  }

  getAccessToken(): string {
    return sessionStorage.getItem('token');
  }
}
