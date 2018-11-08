import { Component, OnInit } from "@angular/core";
//import { MatDialogRef } from '@angular/material';
//import { PetService } from '../pet.service';
//import { NotificationService } from '../../../../services/notification.service';

import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-create-pet",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})

export class CreateComponent implements OnInit{

    petForm: FormGroup;
    url = '';
    formErrors = {
        'email': '',
        'password': ''
    };
    validationMessages = {
        'email': {
            'required': 'Please enter your email',
            'email': 'please enter your vaild email'
        },
        'password': {
            'required': 'please enter your password',
            'pattern': 'The password must contain numbers and letters',
            'minlength': 'Please enter more than 4 characters',
            'maxlength': 'Please enter less than 25 characters',
        }
    };

    constructor(
        private router: Router,
        private fb: FormBuilder
    ){};

    ngOnInit() {
        this.buildForm();
        //this.petServ.getAll();
    }

    buildForm() {
        this.petForm = this.fb.group({
            'email': ['', [
                Validators.required,
                Validators.email
            ]
            ],
            'password': ['', [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
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

    login() {
        this.router.navigate(['/']);
    }

    /*onClear() {
        this.petServ.form.reset();
        this.petServ.initializeFormGroup();
        this.notificationService.success(':: Submitted successfully');
    }*/

    /*onSubmit() {
        if (this.petServ.form.valid) {
            if (!this.petServ.form.get('$key').value)
                this.petServ.add(this.petServ.form.value);
            else
                this.petServ.edit(1, this.petServ.form.value);
            this.petServ.form.reset();
            this.petServ.initializeFormGroup();
            this.notificationService.success(':: Submitted successfully');
            this.onClose();
        }
    }*/

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event) => {
            this.url = event.target.result;
          }
        }
    }
}