import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor( private authService: AuthService){}

//Con esto añado una cabecera en cada petición
  intercept(req, next){   /*El req es la manera en la que va a tomar la información que quisiste en 
    cada petición, y va a tratar d eañadir más información*/
    const tokenizeReq = req.clone({ //Me permite añadir más cabeceras
      setHeaders: { //En cada petición que haga le va a añadir las siguientes cabeceras
        Authorization: `Bearer ${this.authService.getToken()} `
      }
    })
    return next.handle(tokenizeReq); //
  }

}
