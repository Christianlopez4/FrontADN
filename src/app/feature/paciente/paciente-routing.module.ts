import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPacienteComponent } from './components/nav-paciente/nav-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: NavPacienteComponent,
    children: [
      {
        path: 'listar',
        component: ListarPacienteComponent
      },
      {
        path: 'crear',
        component: CrearPacienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
