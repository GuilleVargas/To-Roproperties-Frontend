import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = 2018; 
  constructor(public authService: AuthService ) { 

    //this. anio = new Date().getFullYear(); Si lo que queremos es ir actualizando el año al actual.
  }

  
  ngOnInit(): void {
  }

}
