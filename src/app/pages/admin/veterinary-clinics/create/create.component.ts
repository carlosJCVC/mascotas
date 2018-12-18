import { Component, OnInit } from '@angular/core';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-clinic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateVeterinaryClinicComponent implements OnInit {

  clinicForm: FormGroup;
  days = new FormControl();
  url = '';
  public existImage: boolean;
  daysList: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clinicServ: VeterinaryClinicService,
    private router: Router,
    private fb: FormBuilder,
  ){};

  ngOnInit() {
    this.clinicForm = this.fb.group({
      'Nombre': ['', [Validators.required]],
      'Direccion': ['', [Validators.required]],
      'Especialidades': ['', [Validators.required]],
      'Horario': ['', [Validators.required]],
      //'Dias': ['', [Validators.required]],
      'Logo': [''],
    });
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onSubmit() {
    this.clinicForm.value.Dias = this.days.value.toString();
    this.clinicForm.value.Logo = this.url;

    this.clinicServ.add(this.clinicForm.value).subscribe(res => {
     this.router.navigate(['/auth/clinics/list']);
    });
  }

  onCancel() {
    this.router.navigate(['/auth/clinics/list']);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
        this.existImage = true;
      };
    }
  }
}
