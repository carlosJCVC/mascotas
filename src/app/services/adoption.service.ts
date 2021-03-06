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

    getAll(estado?: string) {
        let url: string;
        url = this.url;
        if (estado && estado !== '') {
            url += '?estado=' + estado;

        }
        return this.http.get(url);
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
