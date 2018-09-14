
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { VerComponent } from './components/ver/ver.component';
import { EditarComponent } from './components/editar/editar.component';


const app_routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'agregar', component: AgregarComponent },

  { path: 'ver/:id', component: VerComponent},

  { path: 'editar/:id', component: EditarComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
