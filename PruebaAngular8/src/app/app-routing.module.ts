import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaClienteComponent } from './components/pantalla-cliente/pantalla-cliente.component';

const routes: Routes = [
  {path: '', component: PantallaClienteComponent},
  {path: 'clientes', component: PantallaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
