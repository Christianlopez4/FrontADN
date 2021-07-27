import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { NavCitaComponent } from './components/nav-cita/nav-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    NavCitaComponent,
    ListarCitaComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    MatTableModule
  ]
})
export class CitaModule { }
