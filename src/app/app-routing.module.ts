import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'paciente', loadChildren: () => import('./feature/paciente/paciente.module').then(mod => mod.PacienteModule) },
  { path: 'documento', loadChildren: () => import('./feature/documento/documento.module').then(mod => mod.DocumentoModule) },
  { path: 'categoria', loadChildren: () => import('./feature/categoria/categoria.module').then(mod => mod.CategoriaModule) },
  { path: 'cita', loadChildren: () => import('./feature/cita/cita.module').then(mod => mod.CitaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
