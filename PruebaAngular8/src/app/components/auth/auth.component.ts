import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private fb : FormBuilder, private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.iniciarlizarForm();
  }

  iniciarlizarForm(){
    this.formLogin = this.fb.group({
      flblEmail: [null, Validators.required],
      flblPassword: [null, Validators.required],
    },
    
  );
  }

  get flblEmail(){
    return this.formLogin.get('flblEmail')
  }

  get flblPassword(){
    return this.formLogin.get('flblPassword')
  }

  onLogin(){
    if (!this.formLogin.valid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    this.authService.login(String(this.flblEmail.value), String(this.flblPassword.value))
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log('Error en login:')
        }
      )
  }

}
