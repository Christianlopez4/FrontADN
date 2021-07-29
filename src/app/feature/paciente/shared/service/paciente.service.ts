import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable()
export class PacienteService {

  constructor(protected http: HttpService) { }

  public consultar(): Observable<Paciente[]> {
    return this.http.doGet<Paciente[]>(`${environment.endpoint}/pacientes`, this.http.optsName('consultar pacientes'));
  }

  public guardar(paciente: Paciente): Observable<number> {
    return this.http.doPost<Paciente, number>(`${environment.endpoint}/pacientes`, paciente, this.http.optsName('crear paciente'));
  }

}
