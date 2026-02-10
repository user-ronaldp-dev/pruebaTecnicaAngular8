import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametrosDatosCliente } from 'src/app/models/parametros-datos-cliente';
import { zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-datos-del-cliente',
  templateUrl: './datos-del-cliente.component.html',
  styleUrls: ['./datos-del-cliente.component.css']
})
export class DatosDelClienteComponent implements OnInit {

  formDatosDelCliente: FormGroup;
   _parametrosComponent: ParametrosDatosCliente | undefined;

  get pParametrosComponent(): ParametrosDatosCliente | undefined {
    return this._parametrosComponent;
  }

   @Input()
  set pParametrosComponent(pParametrosComponent: ParametrosDatosCliente | undefined) {
    if (pParametrosComponent != undefined) {
      this._parametrosComponent = pParametrosComponent;
      this.cargarDatos(this._parametrosComponent);
      
    } 
  }


  constructor(private fb : FormBuilder) {

   }

  ngOnInit() {
    this.iniciarForm();
    const imagenStorage = localStorage.getItem('imagenStorage');
    if(imagenStorage){
      this.formDatosDelCliente.patchValue({
        flblFotoStorage: JSON.parse(imagenStorage)
      })
    }
    zip(this.formDatosDelCliente.statusChanges, this.formDatosDelCliente.valueChanges).pipe(
      filter(([state, value]) => state === 'VALID'),
      map(([state, value]) => value),
      //tap(data => console.log(data))
    ).subscribe(formValue => {
      localStorage.setItem('imagenStorage', JSON.stringify(formValue.flblFotoStorage))
    })
  }

  iniciarForm(){
    this.formDatosDelCliente = this.fb.group({
      flblNombre : [{value: null, disabled: true}],
      flblFoto: null,
      flblFotoStorage: null,
      flblGenero: [{value: null, disabled: true}]
    });
    
  }

    cargarDatos(data : ParametrosDatosCliente){
      this.formDatosDelCliente.patchValue({
        flblNombre: data.nombre,
        flblGenero: data.genero,
        flblFoto: data.foto
      });
    
    }


    addImage(event){
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (event) =>{
        this.formDatosDelCliente.patchValue({
          flblFotoStorage: reader.result
        });
      }

    }

    removeImage(event){
      this.formDatosDelCliente.patchValue({
        flblFotoStorage : null
      })
    }


    get flblFoto(){
      return this.formDatosDelCliente.get('flblFoto');
    }

    get flblFotoStorage(){
      return this.formDatosDelCliente.get('flblFotoStorage');
    }


}
