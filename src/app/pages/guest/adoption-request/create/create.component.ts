import {Component, OnInit} from '@angular/core';
import {AdoptionService} from '../../../../services/adoption.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-create-adoption',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  adoptionRequestForm: FormGroup;
  matcher = new MyCustomErrorStateMatcher;
  mascotasActuales = false;
  mascotasEsterilizadas = false;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private adoptionServ: AdoptionService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.adoptionRequestForm = this.fb.group({
      'Nombre': ['', [Validators.required]],
      'Correo': ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')]],
      'CedulaIdentidad': ['', [Validators.required, Validators.pattern('[0-9]{7,10}[a-zA-Z][a-zA-Z]')]],
      'Departamento': ['', []],
      'Direccion': ['', []],
      'Ocupacion': ['', []],
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

  checkedPreg2(e) {
    this.mascotasActuales = e.checked;
  }

  checkedPreg3(e) {
    this.mascotasEsterilizadas = e.checked;
  }
}

export class MyCustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
