import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-create-clinic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateVeterinaryClinicsComponent implements OnInit {

  @ViewChild('imageClinic') inputImageClinic: ElementRef;
  clinicForm: FormGroup;
  url = '';
  urlClinic: Observable<string>;
  uploadPercent: Observable<number>;
  public existImage: boolean;

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
    console.log(this.inputImageClinic.nativeElement.value);
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
