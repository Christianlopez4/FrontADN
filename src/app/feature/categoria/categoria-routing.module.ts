import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavCategoriaComponent } from './components/nav-categoria/nav-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: NavCategoriaComponent,
    children: [
      {
        path: 'listar',
        component: ListarCategoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
