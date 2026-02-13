import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastNotificationComponent } from './custom/toast-notification/toast-notification.component';
import { DatosDeContactoComponent } from './dashboard/components/datos-de-contacto/datos-de-contacto.component';
import { DatosDeRegistroClienteComponent } from './dashboard/components/datos-de-registro-cliente/datos-de-registro-cliente.component';
import { DatosDelClienteComponent } from './dashboard/components/datos-del-cliente/datos-del-cliente.component';
import { LoginComponent } from './login/login.component';
import { BannerNotificationComponent } from './custom/banner-notification/banner-notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';   

@NgModule({
  declarations: [
    AppComponent,
    DatosDelClienteComponent,
    DatosDeRegistroClienteComponent,
    DatosDeContactoComponent,
    ToastNotificationComponent,
    DashboardComponent,
    LoginComponent,
    BannerNotificationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
