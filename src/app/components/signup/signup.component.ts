import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit{

  constructor(private authservice: AuthService) {}

  user = {
    email: '',
    password: ''
  }

  ngOnInit() {}

  //Con este método autentico
  signUp(){
    this.authservice.signUp(this.user) //Hago la petición
    .subscribe( //Respuesta que me va a dar el servidor, me puede dar respuesta o error
    res => {
      console.log(res)
      localStorage.setItem('token', res['token']);
    },
    err => console.log(err)
    )}
 }
