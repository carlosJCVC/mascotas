import { Component, OnInit } from "@angular/core";
//import { MatDialogRef } from '@angular/material';
import { PetService } from '../pet.service';
//import { NotificationService } from '../../../../services/notification.service';

import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-create-pet",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})

export class CreateComponent implements OnInit{

    petForm: FormGroup;
    url = '';
    formErrors = {
        'nombre': '',
        'raza': '',
        'especie': '',
        'edad': '',
        'sexo': '',
        'procedencia': '',
        'enfermedades': '',
        'descripcion': '',
    };
    validationMessages = {
        'nombre': {
            'required': 'Ingresa un nombre de la mascota',
        },
        'raza': {
            'required': 'Ingresa la raza de la mascota',
        },
        'especie': {
            'required': 'Selecciona la especie de la mascota',
        },
        'edad': {
            'required': 'Edad de la mascota es requerida',
        },
        'sexo': {
            'required': 'Sexo de la mascota es requerida',
        },
        'procedencia': {
            'required': 'Sexo de la mascota es requerida',
        },
        'enfermedades': {
            'required': 'Sexo de la mascota es requerida',
        },
        'descripcion': {
            'required': 'Sexo de la mascota es requerida',
        },
    };

    constructor(
        private petServ: PetService,
        private router: Router,
        private fb: FormBuilder,
    ){};

    ngOnInit() {
        this.buildForm();
        //this.petServ.getAll();
    }

    buildForm() {
        this.petForm = this.fb.group({
            'nombre': ['', [ Validators.required ]],
            'raza': ['', [ Validators.required ]],
            'especie': ['', [ Validators.required ]],
            'edad': ['', [ Validators.required ]],
            'sexo': ['', [ Validators.required ]],
            'procedencia': ['', [ Validators.required ]],
            'enfermedades': ['', [ Validators.required ]],
            'descripcion': ['', [ Validators.required ]],
        });

        this.petForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        // if (!this.userForm) {
        //   return;
        // }
        // const form = this.userForm;
        // for (const field in this.formErrors) {
        //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        //     this.formErrors[field] = '';
        //     const control = form.get(field);
        //     if (control && control.dirty && !control.valid) {
        //       const messages = this.validationMessages[field];
        //       for (const key in control.errors) {
        //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
        //           this.formErrors[field] += messages[key] + ' ';
        //         }
        //       }
        //     }
        //   }
        // }
    }

    create() {
       if (this.petForm.valid) {
           this.petForm.value.imagen = this.url;
           console.log(this.petForm.value);
           // this.petServ.add(this.petForm.value);
            // if (!this.petServ.form.get('$key').value)
            //    this.petServ.add(this.petForm.value);
            // else
            //     this.petServ.edit(1, this.petForm.value);

            //this.petServ.initializeFormGroup();
            //this.notificationService.success(':: Submitted successfully');
            //this.onClose();
        }
        //this.router.navigate(['/admin']);
    }

    /*onClear() {
        this.petServ.form.reset();
        this.petServ.initializeFormGroup();
        this.notificationService.success(':: Submitted successfully');
    }*/

    onSubmit() {
        // alert();
        // if (this.petForm.valid) {
        //     if (!this.petServ.form.get('$key').value){
        //         this.petForm.value.imagen = this.url;
        //         this.petServ.add(this.petForm.value);
        //     }
        //     else
        //         this.petServ.edit(1, this.petServ.form.value);
        //     this.petServ.form.reset();
        //     this.petServ.initializeFormGroup();
        //     this.notificationService.success(':: Submitted successfully');
        //     this.onClose();
        // }
    }

    onSelectFile(event) {
        var element = document.getElementById("preview");
        element.classList.remove("preview_img");

        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event) => {
            this.url = event.target.result;
          }
        }
    }
}