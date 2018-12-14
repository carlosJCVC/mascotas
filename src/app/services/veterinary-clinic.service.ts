import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VeterinaryClinicService {

  url: string;

  constructor(public http: HttpClient) {
    // this.url = environment.petsAPI + '/api/mascotas';
    this.url = environment.petsAPIazure + '/api/clinicasveterinarias';

  }


  add(data: any) {
    return this.http.post(this.url, data);
  }

  getAll() {
    return this.http.get(this.url);
  }

  getAllMyPets(user_id){
    return this.http.get(this.url + '/' + user_id);
  }

  getOne(id) {
    return this.http.get(this.url + '/' + id);
  }

  edit(id, data: any) {
    return this.http.put(this.url + '/' + id, data);
  }

  delete(id) {
    return this.http.get(this.url + '/' + id);
  }
}
