import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaClienteComponent } from './components/pantalla-cliente/pantalla-cliente.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { UserLoggedGuard } from './guards/user-logged.guard';

const routes: Routes = [
  {path: '', component: PantallaClienteComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: PantallaClienteComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent, canActivate: [UserLoggedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
