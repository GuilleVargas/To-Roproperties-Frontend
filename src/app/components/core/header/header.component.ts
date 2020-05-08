import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
  mostrar=true;
  
  contacto =  {
    nombre: 'Matilde Torres',
    telefono: '686018387',
    correo: 'comercial@to-roproperties.com',
    direccion: 'C/Brunete 2B'
  }; 

}
