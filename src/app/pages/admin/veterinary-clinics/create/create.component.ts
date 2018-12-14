import { Component, OnInit } from '@angular/core';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-clinic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateVeterinaryClinicsComponent implements OnInit {

  clinicForm: FormGroup;
  url = '';
  public existImage: boolean;

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
      'Dias': ['', [Validators.required]],
      'Logo': [''],
    });
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onSubmit() {
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
