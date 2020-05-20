import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
  mostrar=true;
  
  constructor( public authService: AuthService){}
  
  contacto =  {
    nombre: 'Matilde Torres',
    telefono: '686018387',
    correo: 'comercial@to-roproperties.com',
    direccion: 'C/Brunete 2B'
  }; 

}
