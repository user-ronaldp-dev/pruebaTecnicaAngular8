import { Component, OnInit } from '@angular/core';
import { ParametrosDatosCliente } from 'src/app/models/parametros-datos-cliente';
import { ParametrosDatosContacto } from 'src/app/models/parametros-datos-contacto';
import { ParametrosRegistroCliente } from 'src/app/models/parametros-registro-cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-pantalla-cliente',
  templateUrl: './pantalla-cliente.component.html',
  styleUrls: ['./pantalla-cliente.component.css']
})
export class PantallaClienteComponent implements OnInit {

  cliente: any;

  datosclienteCargados : ParametrosDatosCliente = undefined;
  datosRegistroCargados: ParametrosRegistroCliente = undefined;
  datosContactoCargados : ParametrosDatosContacto = undefined;
  

  constructor(private service: ClienteService) { }

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
    });
  }






}
