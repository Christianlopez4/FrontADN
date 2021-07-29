import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { NavCitaComponent } from './components/nav-cita/nav-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { MatTableModule } from '@angular/material/table';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CitaService } from './shared/service/cita.service';

@NgModule({
  declarations: [
    NavCitaComponent,
    ListarCitaComponent,
    CrearCitaComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
