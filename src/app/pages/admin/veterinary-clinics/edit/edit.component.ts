import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';
import { VeterinaryClinic } from '../../veterinary-clinics/edit/edit.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditVeterinaryClinicComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private clinicService: VeterinaryClinicService,
    private router: Router,
  ) {}

  ourFile: File;
  days = new FormControl();
  public url = '';
  public existeImagen: boolean;
  private id;
  private clinic;
  public veterinaryClinic = {} as VeterinaryClinic;
  public clinic_nombre;
  public clinic_telefono;
  public clinic_direccion;
  public clinic_especialidades;
  public clinic_horario;
  public clinic_dias;
  daysList: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.clinicService.getOne(this.id).subscribe(res => {
        this.clinic = res;
        this.clinic_nombre = this.clinic.nombre;
        this.clinic_telefono = this.clinic.telefono;
        this.clinic_direccion = this.clinic.direccion;
        this.clinic_especialidades = this.clinic.especialidades;
        this.clinic_horario = this.clinic.horario;
        this.clinic_dias = this.clinic.dias.split(',');
        this.url = this.clinic.logo;
        if ( this.url === '' ) {
          this.existeImagen = false;
        } else {
          this.existeImagen = true;
        }
      });
    });
  }

  onSubmit() {
    this.veterinaryClinic.nombre = this.clinic_nombre;
    this.veterinaryClinic.direccion = this.clinic_direccion;
    this.veterinaryClinic.telefono = this.clinic_telefono;
    this.veterinaryClinic.horario = this.clinic_horario;
    this.veterinaryClinic.especialidades = this.clinic_especialidades;
    this.veterinaryClinic.logo = this.url;
    this.veterinaryClinic.dias = this.days.value.toString();
    this.veterinaryClinic.id = this.id;

    this.clinicService.edit(this.id, this.veterinaryClinic).subscribe(res => {
      this.router.navigate(['/auth/clinics/list/']);
    });
  }

  onCancel() {
    this.router.navigate(['/auth/clinics/list/']);
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
        this.existeImagen = true;
      };
    }
  }
}

export interface VeterinaryClinic {
  id: string;
  nombre: string;
  logo: any;
  telefono: string;
  direccion: string;
  especialidades: string;
  horario: string;
  dias: string;
}
