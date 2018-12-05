import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AdoptionService {

    url: string;

    constructor(public http: HttpClient) {
        this.url = environment.petsAPIazure + '/api/solicitudAdopcions';
    }

    add(data: any) {
        return this.http.post(this.url, data);
    }

    getAll() {
        console.log(this.url);
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
