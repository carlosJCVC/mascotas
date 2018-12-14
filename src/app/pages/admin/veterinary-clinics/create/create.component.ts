import { Component, OnInit } from '@angular/core';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PetService} from '../../../../services/pet.service';

@Component({
  selector: 'app-create-clinic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateVeterinaryClinicsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private clinicServ: VeterinaryClinicService,
    private router: Router,
    private fb: FormBuilder,
  ){};

  ngOnInit() {
  }
}
