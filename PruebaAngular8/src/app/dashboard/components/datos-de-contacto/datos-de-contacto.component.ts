import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalInfoComponent } from 'src/app/custom/modal-info/modal-info.component';
import { ParametrosDatosContacto } from 'src/app/models/parametros-datos-contacto';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-datos-de-contacto',
  templateUrl: './datos-de-contacto.component.html',
  styleUrls: ['./datos-de-contacto.component.css']
})
export class DatosDeContactoComponent implements OnInit {

  formDatosContacto: FormGroup;
  _parametrosComponent: ParametrosDatosContacto | undefined;

 get pParametrosComponent(): ParametrosDatosContacto | undefined {
   return this._parametrosComponent;
 }

  @Input()
 set pParametrosComponent(pParametrosComponent: ParametrosDatosContacto | undefined) {
   if (pParametrosComponent != undefined ) {
     this._parametrosComponent = pParametrosComponent;
     this.cargarDatos(this._parametrosComponent);
    
   }
 }

 @ViewChild('modalInfo', {static: false}) modalInfo!: ModalInfoComponent;

constructor(private fb : FormBuilder) { }

ngOnInit() {
this.iniciarForm();
}

ngAfterViewInit() {
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
}

iniciarForm(){
this.formDatosContacto = this.fb.group({
 flblEmail : [{value: null, disabled: true}],
 flblTelefono: [{value: null, disabled: true}],
 flblDireccion: [{value: null, disabled: true}]
});}

cargarDatos(data: ParametrosDatosContacto){
 this.formDatosContacto.patchValue({
   flblEmail: data.email,
   flblTelefono: data.telefono,
   flblDireccion: `${data.direccion.country}  - ${data.direccion.city} | ${data.direccion.street.number} - ${data.direccion.street.name}`
 })
}

abrirModal(){
  const informacion = {
    titulo: 'Información de Dirección Completa:',
    datosContacto: this._parametrosComponent && this._parametrosComponent.direccion
  };
  
  this.modalInfo.abrir(informacion);
}

}
