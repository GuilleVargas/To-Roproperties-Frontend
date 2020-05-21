import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

interface InmuebleGroup {
  name: string;
  Inmueble : Inmueble[];
}

interface Inmueble {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})


export class GeneralComponent {

  mostrar1 = false;
  mostrar2 = false;
  mostrar3 = false;

  search = 'true';

  //Selector del tipo(compra,alquiler)
  selected = 'x'; //Está en x la cual no existe, así no me sale ninguna por defecto

  //Selector de la provincia(Cádiz)
  selected1 = 'x'; //Está en x la cual no existe, así no me sale ninguna por defecto

   //Selector de la provincia(Cádiz)
   selected2 = 'x'; //Está en x la cual no existe, así no me sale ninguna por defecto

  //Selector del tipo de vivienda 
  InmuebleControl = new FormControl();
  InmuebleGroups: InmuebleGroup[] = [
    {
      name: 'Vivienda',
      Inmueble: [
        {value: 'piso', viewValue: 'Piso'},
        {value: 'chalet', viewValue: 'Casa/Chalet'},
        {value: 'rustica', viewValue: 'Casa Rústica'},
        {value: 'edificio', viewValue: 'Edificio'}
      ]
    },
    {
      name: 'Garaje',
      Inmueble: [
        {value: 'plaza', viewValue: 'Plaza'},
        {value: 'particular', viewValue: 'Particular'},
        {value: 'trastero', viewValue: 'Trastero'}
      ]
    },
    {
      name: 'Oficina',
      Inmueble: [
        {value: 'local', viewValue: 'Local'},
        {value: 'nave', viewValue: 'Nave'},
      ]
    }
  ];


}
