import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-create-clinic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateVeterinaryClinicComponent implements OnInit {

  @ViewChild('imageClinic') inputImageClinic: ElementRef;
  clinicForm: FormGroup;
  days = new FormControl();
  url = '';
  urlClinic: Observable<string>;
  uploadPercent: Observable<number>;
  public existImage: boolean;
  daysList: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  matcher = new MyCustomErrorStateMatcher;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clinicServ: VeterinaryClinicService,
    private router: Router,
    private fb: FormBuilder,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.clinicForm = this.fb.group({
      'Nombre': ['', [Validators.required]],
      'Direccion': ['', [Validators.required]],
      'Telefono': ['', [Validators.required, Validators.pattern('[0-9]{6,8}')]],
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
    this.clinicForm.value.Logo = this.inputImageClinic.nativeElement.value;

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
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = `uploads/clinics/pet_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlClinic = ref.getDownloadURL())).subscribe();
  }
}

export class MyCustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
