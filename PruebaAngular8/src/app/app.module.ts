import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosDelClienteComponent } from './components/datos-del-cliente/datos-del-cliente.component';
import { DatosDeRegistroClienteComponent } from './components/datos-de-registro-cliente/datos-de-registro-cliente.component';
import { DatosDeContactoComponent } from './components/datos-de-contacto/datos-de-contacto.component';
import { PantallaClienteComponent } from './components/pantalla-cliente/pantalla-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosDelClienteComponent,
    DatosDeRegistroClienteComponent,
    DatosDeContactoComponent,
    PantallaClienteComponent,
    AuthComponent,
    ToastNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
