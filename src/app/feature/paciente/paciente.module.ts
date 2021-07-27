import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


import { NavPacienteComponent } from './components/nav-paciente/nav-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';

@NgModule({
  declarations: [
    NavPacienteComponent,
    ListarPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ]
})
export class PacienteModule { }
