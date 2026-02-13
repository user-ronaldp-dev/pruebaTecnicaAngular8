import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { ParametrosDatosContacto } from '../models/parametros-datos-contacto';
import { ParametrosRegistroCliente } from '../models/parametros-registro-cliente';
import { ParametrosDatosCliente } from '../models/parametros-datos-cliente';
import { Router } from '@angular/router';
import { BannerNotificationService } from '../services/banner-notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datosclienteCargados : ParametrosDatosCliente = undefined;
  datosRegistroCargados: ParametrosRegistroCliente = undefined;
  datosContactoCargados : ParametrosDatosContacto = undefined;

  constructor(private service: ClienteService, private router : Router, private notificationService : BannerNotificationService) { }

  ngOnInit() {
    this.service.listar().subscribe((response) => {
      this.datosclienteCargados = {
        nombre: `${response.results[0].name.first} ${response.results[0].name.last}`,
        genero: response.results[0].gender,
        foto: response.results[0].picture.large
      }
      this.datosContactoCargados = {
        telefono: response.results[0].phone,
        email: response.results[0].email,
        direccion: `${response.results[0].location.street.number} - ${response.results[0].location.street.name}`
      }
      this.datosRegistroCargados = {
        fecha: response.results[0].registered.date
      }
    },
    (error) => {
      this.notificationService.error('Ha sucedido un error al cargar los datos')
      
    }
  
  );
  }

  onLogout(){
    localStorage.removeItem('token');
    sessionStorage.clear();
    
    this.router.navigate(['/login']);
  }





}
