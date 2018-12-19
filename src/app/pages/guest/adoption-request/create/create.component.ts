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
            'Nombre': ['', [ Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,10}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,10}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,10}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,10}') ]],
            'Correo': ['', [ Validators.required,Validators.email ]],
            'CedulaIdentidad': ['', [ Validators.required, Validators.pattern('[0-9]{1,7}[a-zA-Z]{2,3}') ]],
            'Departamento': ['', []],
            'Provincia': ['', [Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}')]],
            'Direccion': ['', [Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{3,50}')]],
            'Ocupacion': ['', [Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{3,30}')]],
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
