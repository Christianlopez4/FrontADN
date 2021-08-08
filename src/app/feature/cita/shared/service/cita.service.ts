import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable()
export class CitaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, number>(`${environment.endpoint}/citas`, cita, this.http.optsName('crear cita'));
  }

  public cancelar(id: number) {
    return this.http.doDelete<number>(`${environment.endpoint}/citas/${id}/cancelar`, this.http.optsName('cancelar cita'));
  }

  public buscar(id: number) {
    return this.http.doGet<Cita>(`${environment.endpoint}/citas/${id}`, this.http.optsName('buscar cita'));
  }

  public actualizar(cita: Cita, id: number) {
    return this.http.doPut<Cita, number>(`${environment.endpoint}/citas/${id}`, cita, this.http.optsName('actualizar cita'));
  }
}
