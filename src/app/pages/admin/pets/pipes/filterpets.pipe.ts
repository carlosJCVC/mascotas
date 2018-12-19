import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterpets'
})

export class FilterPipePets implements PipeTransform{
    transform(items:any[], searchText: string):any[]{
        if(!items) return [];
        if(!searchText) return items;
        searchText=searchText.toLowerCase();
        return items.filter(it=>{
            // console.log(it);
            // edad: 6
            // especie: "perro"
            // estado: "disponible"
            // id: 3
            // nombre: "perro3"
            // procedencia: "ningun lugar"
            // raza: "golden"
            // sexo: "macho"
            return it.nombre.toLowerCase().includes(searchText)
                    ||it.raza.toLowerCase().includes(searchText)
                    ||it.procedencia.toLowerCase().includes(searchText)
                    ||it.edad.toString().toLowerCase().includes(searchText);
        });
    }
}
