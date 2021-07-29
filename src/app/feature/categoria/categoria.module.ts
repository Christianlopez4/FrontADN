import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { NavCategoriaComponent } from './components/nav-categoria/nav-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { MatTableModule } from '@angular/material/table';
import { CategoriaService } from '@shared/services/categoria/service/categoria.service';


@NgModule({
  declarations: [
    NavCategoriaComponent,
    ListarCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule
  ],
  providers: [CategoriaService]
})
export class CategoriaModule { }
