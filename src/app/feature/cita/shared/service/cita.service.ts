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
    return this.http.doPost<number, number>(`${environment.endpoint}/citas/${id}/cancelar`, id, this.http.optsName('cancelar cita'));
  }
}
