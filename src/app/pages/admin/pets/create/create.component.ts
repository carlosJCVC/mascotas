import { Component, OnInit , ElementRef , ViewChild } from '@angular/core';
import { PetService } from '../../../../services/pet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

    @ViewChild('imagePet') inputImagePet: ElementRef;
    petForm: FormGroup;
    url = '';
    urlPet: Observable<string>;
    uploadPercent: Observable<number>;
    public existImage: boolean;
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
        private activatedRoute: ActivatedRoute,
        private petServ: PetService,
        private router: Router,
        private fb: FormBuilder,
        private storage: AngularFireStorage,
    ) {}

    ngOnInit() {
        this.buildForm();
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
    }

    create() {
       if (this.petForm.valid) {
           console.log(this.inputImagePet.nativeElement.value);
           this.petForm.value.imagen = this.inputImagePet.nativeElement.value;
           this.petServ.add(this.petForm.value).subscribe(res => {
                this.router.navigate(['/auth/pets/list']);
            });
        }
    }

    onValueChanged(data?: any) {

    }

    onSubmit() {

    }
    onCancel() {
        this.router.navigate(['/auth/pets/list']);
    }
    openInput() {
        document.getElementById('fileInput').click();
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event) => {
            this.url = event.target.result;
          };
          this.existImage = true;
        }

        const id = Math.random().toString(36).substring(2);
        const file = event.target.files[0];
        const filePath = `uploads/pets/pet_${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe( finalize(() => this.urlPet = ref.getDownloadURL())).subscribe();
    }
}
