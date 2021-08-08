import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Documento } from '../model/documento';

import { DocumentoService } from './documento.service';

describe('DocumentoService', () => {
  let httpMock: HttpTestingController;
  let service: DocumentoService;
  const apiEndpointDocumentosConsulta = `${environment.endpoint}/documentos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DocumentoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(DocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería listar los documentos', () => {
    const dummyDocumentos: Documento[] = [
      new Documento(1, 'Doc1'),
      new Documento(2, 'Doc2'),
      new Documento(3, 'Doc3')
    ];

    service.consultar().subscribe(respuesta => {
      expect(respuesta.length).toBe(3);
      expect(respuesta).toEqual(dummyDocumentos);
    });

    const req = httpMock.expectOne(apiEndpointDocumentosConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDocumentos);

  });
});
