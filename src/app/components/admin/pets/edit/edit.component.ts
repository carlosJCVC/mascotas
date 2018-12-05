import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private petService: PetService,
        private route: Router,
    ) {}

    ourFile: File;
    public url = '';
    public existeImagen: boolean;
    private id;
    private pet;
    public mascota = {} as Mascota;
    public pet_nombre;
    public pet_raza;
    public pet_edad;
    public pet_procedencia;
    public pet_especie;
    public pet_enfermedades;
    public pet_descripcion;
    public pet_sexo;
    public pet_estado;
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.petService.getOne(this.id).subscribe(res => {
                this.pet = res;
                // console.log(res);
                this.pet_nombre = this.pet.nombre;
                this.pet_raza = this.pet.raza;
                this.pet_edad = this.pet.edad;
                this.pet_procedencia = this.pet.procedencia;
                this.pet_especie = this.pet.especie;
                this.pet_enfermedades = this.pet.enfermedades;
                this.pet_descripcion = this.pet.descripcion;
                this.pet_sexo = this.pet.sexo;
                this.pet_estado = this.pet.estado;
                
                this.url = this.pet.imagen;
               if (this.url === '') { this.existeImagen = false;  } else { this.existeImagen = true; }


            });
        });
    }
    onSubmit() {
        this.mascota.nombre = this.pet_nombre;
        this.mascota.raza = this.pet_raza;
        this.mascota.edad = this.pet_edad;
        this.mascota.procedencia = this.pet_procedencia;
        this.mascota.especie = this.pet_especie;
        this.mascota.enfermedades = this.pet_enfermedades;
        this.mascota.descripcion = this.pet_descripcion;
        this.mascota.sexo = this.pet_sexo;
        this.mascota.estado = this.pet_estado;
        this.mascota.imagen = this.url;
        this.mascota.id = this.id;
        // console.log(this.mascota);
        this.petService.edit(this.id, this.mascota).subscribe(res => {
            // console.log(res);
            this.route.navigate(['/auth/pets/list']);
            
        });
    }
    
    onCancel() {
        window.history.back();
    }

    openInput() {
        // your can use ElementRef for this later
        document.getElementById('fileInput').click();
      }

    fileChange(files: File[]) {
        if (files.length > 0) {
          this.ourFile = files[0];
        }
      }
      onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (
              event) => {
            this.url = event.target.result;
            this.existeImagen = true;
          }
        }
      }
}

export interface Mascota {
    nombre: string;
    raza: string;
    edad: string;
    procedencia: string;
    especie: string;
    enfermedades: string;
    descripcion: string;
    imagen: any;
    estado: boolean;
    sexo: string;
    id: string;

}
