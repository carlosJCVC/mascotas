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

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        fullName: new FormControl('', Validators.required),
        raza: new FormControl('', Validators.required),
        especie: new FormControl('', [Validators.required, Validators.minLength(8)]),
        edad: new FormControl('', Validators.required),
        sexo: new FormControl('1', Validators.required),
        procedencia: new FormControl(0, Validators.required),
        enfermedades: new FormControl('', Validators.required),
        descripcion: new FormControl('')
    });

    initializeFormGroup() {
        this.form.setValue({
            $key: null,
            fullName: '',
            raza: '',
            especie: '',
            edad: '',
            sexo: '1',
            procedencia: 0,
            enfermedades: '',
            descripcion: '',
        });
    }

    add(data: any) {
      return this.http.post(this.url, data);
    }

    getAll(sex?: string, especie?: string, edad?: string, raza?: string) {
      return this.http.get(this.url + `search?sex=${sex}&especie=${especie}&edad=${edad}&raza=${raza}`);
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

    populateForm(pet) {
        this.form.setValue(_.omit(pet, 'departmentName'));
    }
}
