import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../services/adoption.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-adoption',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
    adoptionRequestForm: FormGroup;
    url = '';
    formErrors = {
        'nombre': '',
        'cedula_identidad': '',
        'departamento': '',
        'provincia': '',
        'direccion': '',
        'ocupacion': '',
        'estado_civil': '',
        'estado_solicitud': '',
        'razon_adopcion': '',
        'mascotas_actuales': '',
        'razon_mascotas_esterilizadas': '',
        'mascotas_anteriomente': '',
        'estado_mascotas_anteriores': '',
        'visita_periodica_domicilio': '',
    };

    validationMessages = {
        'nombre': { 'required': 'Ingresa su nombre', },
        'cedula_identidad': { 'required': 'Ingresa su cedula_identidad', },
        'departamento': { 'required': 'Ingresa su Departamento', },
        'provincia': { 'required': 'Ingresa su Provincia', },
        'direccion': { 'required': 'Ingresa su Direccion', },
        'ocupacion': { 'required': 'Ingresa su Ocupacion', },
        'estado_civil': { 'required': 'Ingresa su Estado_civil', },
        'estado_solicitud': { 'required': 'Ingresa su Estado_solicitud', },
        'razon_adopcion': { 'required': 'Ingresa su Razon_adopcion', },
        'mascotas_actuales': { 'required': 'Ingresa su Mascotas_actuales', },
        'razon_mascotas_esterilizadas': { 'required': 'Ingresa su Razon_mascotas_esterilizadas', },
        'mascotas_anteriomente': { 'required': 'Ingresa su Mascotas_anteriomente', },
        'estado_mascotas_anteriores': { 'required': 'Ingresa su Estado_mascotas_anteriores', },
        'visita_periodica_domicilio': { 'required': 'Ingresa su Visita_periodica_domicilio', },
    };
    // tslint:disable-next-line:max-line-length
    constructor(private activatedRoute: ActivatedRoute, private adoptionServ: AdoptionService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.adoptionRequestForm = this.fb.group({
            'nombre': ['', [ Validators.required ]],
            'cedula_identidad': ['', [ Validators.required ]],
            'departamento': ['', [ Validators.required ]],
            'provincia': ['', [ Validators.required ]],
            'direccion': ['', [ Validators.required ]],
            'ocupacion': ['', [ Validators.required ]],
            'estado_civil': ['', [ Validators.required ]],
            'estado_solicitud': ['', [ Validators.required ]],
            'razon_adopcion': ['', [ Validators.required ]],
            'mascotas_actuales': ['', [ Validators.required ]],
            'razon_mascotas_esterilizadas': ['', [ Validators.required ]],
            'mascotas_anteriomente': ['', [ Validators.required ]],
            'estado_mascotas_anteriores': ['', [ Validators.required ]],
            'visita_periodica_domicilio': ['', [ Validators.required ]],
        });

        this.adoptionRequestForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {

    }

    create() {
       if (this.adoptionRequestForm.valid) {
           this.adoptionServ.add(this.adoptionRequestForm.value).subscribe(res => {
                this.router.navigate(['/auth/adoption_requests/list']);
            });
        }
    }
}
