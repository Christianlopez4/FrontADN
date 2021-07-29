import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ListarDocumentoComponent } from './components/listar-documento/listar-documento.component';
import { NavDocumentoComponent } from './components/nav-documento/nav-documento.component';
import { DocumentoService } from '@shared/services/documento/service/documento.service';



@NgModule({
  declarations: [
    ListarDocumentoComponent,
    NavDocumentoComponent
  ],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    MatTableModule
  ],
  providers: [DocumentoService]
})
export class DocumentoModule { }
