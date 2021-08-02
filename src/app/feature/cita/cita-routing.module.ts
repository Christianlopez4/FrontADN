import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { NavCitaComponent } from './components/nav-cita/nav-cita.component';

const routes: Routes = [
  {
    path: '',
    component: NavCitaComponent,
    children: [
      {
        path: 'listar',
        component: ListarCitaComponent
      },
      {
        path: 'crear',
        component: CrearCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
