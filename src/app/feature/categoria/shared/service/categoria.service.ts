import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaModule } from '../../categoria.module';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: CategoriaModule
})
export class CategoriaService {

  constructor(protected http: HttpService) { }

  public consultar(): Observable<Categoria[]> {
    return this.http.doGet<Categoria[]>(`${environment.endpoint}/categorias`, this.http.optsName('consultar categorias'));
  }
}
