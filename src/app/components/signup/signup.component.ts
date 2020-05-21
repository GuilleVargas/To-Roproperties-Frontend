import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit{

  form: FormGroup;
  show: boolean;

  constructor(private authservice: AuthService, 
    private router: Router) {
      this.show = false;
    }

    password() {
      this.show = !this.show;
  }

  user = {
    email: '',
    password: ''
  }


  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  //Con este método autentico
  signUp(){
    if(this.form.valid){this.authservice.signUp(this.user) //Hago la petición
    .subscribe( //Respuesta que me va a dar el servidor, me puede dar respuesta o error
    res => {
      console.log(res)
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/']);
    },
    err => console.log(err)
    )}
  }
 }
