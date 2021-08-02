import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDocumentoComponent } from './components/nav-documento/nav-documento.component';
import { ListarDocumentoComponent } from './components/listar-documento/listar-documento.component';

const routes: Routes = [
  {
    path: '',
    component: NavDocumentoComponent,
    children: [
      {
        path: 'listar',
        component: ListarDocumentoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoRoutingModule { }
