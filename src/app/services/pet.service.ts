import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pet } from '../models/pet.interface';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  url: string;
  constructor(public http: HttpClient) {
  	this.url = environment.petsAPIazure + '/api/mascotas';
  }

  add(data: Pet){
    return this.http.post<Pet>(this.url, data);
  }
  getAll() {
    return this.http.get<Pet[]>(this.url);
  }

  getOne(id:number) {
    return this.http.get<Pet>(this.url + '/' + id);
  }

  edit(id:number, data: Pet) {
    return this.http.put(this.url + '/' + id, data);
  }

  delete(id:number) {
    return this.http.get(this.url + '/' + id);
}
}