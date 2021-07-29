import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { CitaModule } from '../../cita.module';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: CitaModule
})
export class CitaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, number>(`${environment.endpoint}/citas`, cita, this.http.optsName('crear cita'));
  }
}
