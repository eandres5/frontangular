import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { ClienteComponent } from './components/home/cliente/cliente.component';
import { ArticuloComponent } from './components/home/articulo/articulo.component';
import { OrdenComponent } from './components/home/orden/orden.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'orden', children: [
      { path: 'ordenes', component: OrdenComponent },
      ]
    },
    { path: 'cliente', children: [
      { path: 'clientes', component: ClienteComponent },
      ]
    },
    { path: 'articulo', children: [
      { path: 'articulos', component: ArticuloComponent },
      ]
    },
  ]},
  { path: '404', component: ErrorpageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
