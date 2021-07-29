import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Documento } from '../model/documento';

@Injectable()
export class DocumentoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Documento[]>(`${environment.endpoint}/documentos`, this.http.optsName('consultar documentos'));
  }
}
