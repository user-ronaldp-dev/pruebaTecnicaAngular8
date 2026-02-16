import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametrosRegistroCliente } from 'src/app/models/parametros-registro-cliente';

@Component({
  selector: 'app-datos-de-registro-cliente',
  templateUrl: './datos-de-registro-cliente.component.html',
  styleUrls: ['./datos-de-registro-cliente.component.css']
})
export class DatosDeRegistroClienteComponent implements OnInit {

  formDatosRegistroDelCliente: FormGroup;
     _parametrosComponent: ParametrosRegistroCliente | undefined;
  
    get pParametrosComponent(): ParametrosRegistroCliente | undefined {
      return this._parametrosComponent;
    }
  
     @Input()
    set pParametrosComponent(pParametrosComponent: ParametrosRegistroCliente | undefined) {
      if (pParametrosComponent != undefined ) {
        this._parametrosComponent = pParametrosComponent;
        this.cargarDatos(this._parametrosComponent)
       
      } 
    }
  
  constructor(private fb : FormBuilder, private datePipe: DatePipe) {

   }

  ngOnInit() {
    this.iniciarForm()
  }

  iniciarForm(){
    this.formDatosRegistroDelCliente = this.fb.group({
      flblFecha : [{value: null, disabled: true}]
    })
  }

  cargarDatos(data : ParametrosRegistroCliente){
    this.formDatosRegistroDelCliente.patchValue({
      flblFecha: this.datePipe.transform(data.fecha, 'dd/MM/yyyy HH:mm:ss')
    })
  }

}
