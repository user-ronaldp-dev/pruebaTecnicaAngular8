import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private fb : FormBuilder, private authService: AuthService,
    private router : Router, 
    private notificationService : NotificationService
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
        this.notificationService.success('Login Exitoso');
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.notificationService.error('Error al iniciar sesion');
      }
    )
}
}
