import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AdoptionService {

    url: string;

    constructor(public http: HttpClient) {
        this.url = environment.petsAPI + '/api/mascotas';
        //this.url = environment.petsAPIazure + '/api/adoption';
    }

    add(data: any) {
        return this.http.post(this.url, data);
    }

    getAll() {
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