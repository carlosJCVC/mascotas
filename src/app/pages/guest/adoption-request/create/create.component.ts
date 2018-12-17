import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../../../services/adoption.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-adoption',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
    adoptionRequestForm: FormGroup;
    // tslint:disable-next-line:max-line-length
    constructor(private activatedRoute: ActivatedRoute, private adoptionServ: AdoptionService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.adoptionRequestForm = this.fb.group({
            'Nombre': ['', [ Validators.required ]],
            'Correo': ['', [ Validators.required ]],
            'CedulaIdentidad': ['', [ Validators.required, Validators.pattern('[1-9]{1,7}[a-zA-Z][a-zA-Z]') ]],
            'Departamento': ['', []],
            'Provincia': ['', []],
            'Direccion': ['', []],
            'Ocupacion': ['', []],
            'EstadoCivil': ['', []],
            'RazonAdopcion': ['', []],
            'MascotasActuales': ['', []],
            'RazonMascotasEsterilizadas': ['', []],
            'MascotasAnteriormente': ['', []],
            'EstadoMascotasAnteriores': ['', []],
            'VisitaPeriodicaDomicilio': ['', []],
            'IdMascota': [this.activatedRoute.snapshot.paramMap.get('id'), []],
        });
    }

    create() {
        this.adoptionServ.add(this.adoptionRequestForm.value).subscribe(res => {
            this.router.navigate(['']);
        });
    }
}
