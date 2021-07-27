import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Paciente[]>(`${environment.endpoint}/pacientes`, this.http.optsName('consultar pacientes'));
  }
}
