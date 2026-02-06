import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametrosDatosContacto } from 'src/app/models/parametros-datos-contacto';

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
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.iniciarForm();
  }

  iniciarForm(){
    this.formDatosContacto = this.fb.group({
      flblEmail : null,
      flblTelefono: null,
      flblDireccion: null
    });}

    cargarDatos(data: ParametrosDatosContacto){
      this.formDatosContacto.patchValue({
        flblEmail: data.email,
        flblTelefono: data.telefono,
        flblDireccion: data.direccion
      })
    }
}
