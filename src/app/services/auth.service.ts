import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Añado el módulo http

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Añado una propiedad private que sea URL y le pasamos la URL donde está el servidor
  private URL = 'http://localhost:3000' 
  //Ya puedo utilizar la propiedad http para pedir datos
  constructor(private http: HttpClient) { }

  //Creo un método Signup que hará la petición a nuestro servidor de Node
  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user);
  }
}
