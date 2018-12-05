import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../../services/pet.service';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

    constructor (
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private petService: PetService
    ) {}

    private id;
    private sub;
    public pet;
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            // console.log(this.id);
            this.findPet(this.id);
        });
    }

    findPet(id) {
        this.petService.getOne(id).subscribe(res => {
            this.pet = res;
            // console.log(res);
        });
    }
}
