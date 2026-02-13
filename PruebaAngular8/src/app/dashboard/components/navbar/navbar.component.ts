import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() logout = new EventEmitter<void>();

  constructor() { }

  cerrarSesion(): void {
    this.logout.emit();
  }

}
