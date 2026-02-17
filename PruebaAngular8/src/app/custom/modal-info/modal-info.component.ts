import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {

  @ViewChild('modalElement', {static: false}) modalElement!: ElementRef;
  private modalInstance?: Modal;
  datos: any;

  abrir(informacion: any) {
    this.datos = informacion;
    if (!this.modalInstance) {
      this.modalInstance = new Modal(this.modalElement.nativeElement);
    }
    this.modalInstance.show();
  }

  cerrar() {
    this.modalInstance.hide();
  }

}
