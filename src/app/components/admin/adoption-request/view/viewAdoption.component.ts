import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../../../services/adoption.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-adoption',
    templateUrl: './viewAdoption.component.html',
    styleUrls: ['./viewAdoption.component.scss']
})

export class ViewAdoptionComponent implements OnInit {
    adoptionRequest: any;
    constructor( public adoptionServ: AdoptionService, private router: Router, private activatedRoute: ActivatedRoute ) {}

    ngOnInit() {
        this.adoptionServ.getOne(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((response: any) => {
            this.adoptionRequest = response;
        });
    }

    awnswerAdoptionRequest(estado: string) {
        let id: number;
        id = this.adoptionRequest.id;
        this.adoptionServ.edit(id + '/estado', {Estado: estado, IdSolicitud: id}).subscribe(() => {
            this.router.navigate(['auth/adoption_requests/list']);
        });
    }
}
