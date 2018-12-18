import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PetService {

    url: string;
    constructor(public http: HttpClient) {
      // this.url = environment.petsAPI + '/api/mascotas';
      this.url = environment.petsAPIazure + '/api/mascotas';

    }


    add(data: any) {
      return this.http.post(this.url, data);
    }

    getAll(especie?: string, raza?: string, sexo?: string, edad?: string) {
      this.url = environment.petsAPIazure + '/api/mascotas';
      if (sexo || especie || edad || raza) {
        this.url += '?';
      }
      if (especie && especie !== '') {
        this.url += `&especie=${especie}`;
      }
      if (raza && raza !== '') {
        this.url += `&raza=${raza}`;
      }
      if (sexo && sexo !== '') {
        this.url += `&sexo=${sexo}`;
      }
      if (edad && edad !== '') {
        this.url += `&edadmin=${edad[0]}`;
        this.url += `&edadmax=${edad[1]}`;
      }
      return this.http.get(this.url);
    }

    getOne(id) {
      return this.http.get(this.url + '/' + id);
    }

    edit(id, data: any) {
      return this.http.put(this.url + '/' + id, data);
    }

    delete(id) {
      return this.http.delete(this.url + '/' + id);
    }
}
