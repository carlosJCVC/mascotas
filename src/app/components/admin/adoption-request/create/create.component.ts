import { Component, OnInit } from '@angular/core';
//import { AdoptionService } from '../services/adoption.service';

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
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.adoptionRequestForm = this.fb.group({
            'Nombre': ['', [ Validators.required ]],
            'Correo': ['', [ Validators.required ]],
            'CedulaIdentidad': ['', [ Validators.required ]],
            'Departamento': ['', [ Validators.required ]],
            'Provincia': ['', [ Validators.required ]],
            'Direccion': ['', [ Validators.required ]],
            'Ocupacion': ['', [ Validators.required ]],
            'EstadoCivil': ['', [ Validators.required ]],
            'RazonAdopcion': ['', [ Validators.required ]],
            'MascotasActuales': ['', [ Validators.required ]],
            'RazonMascotasEsterilizadas': ['', [ Validators.required ]],
            'MascotasAnteriormente': ['', [ Validators.required ]],
            'EstadoMascotasAnteriores': ['', [ Validators.required ]],
            'VisitaPeriodicaDomicilio': ['', [ Validators.required ]],
            'IdMascota': ['', []],
        });
    }

    create() {
    }
}
