import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitasConsulta = `${environment.endpoint}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería listar citas', () => {
    const dummyCitas = [
      new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA')
    ];

    service.consultar().subscribe(citas => {
      expect(citas.length).toBe(1);
      expect(citas).toEqual(dummyCitas);
    });

    const req = httpMock.expectOne(apiEndpointCitasConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

  it('debería crear una cita', () => {
    const dummyCita = new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA');

    service.guardar(dummyCita).subscribe(respuesta => {
      expect(respuesta).toEqual(1);
    });

    const req = httpMock.expectOne(apiEndpointCitasConsulta);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('debería cancelar una cita', () => {

    service.cancelar(1).subscribe(respuesta => {
      expect(respuesta).toBe(1);
    });

    const req = httpMock.expectOne(apiEndpointCitasConsulta + '/1/cancelar');
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('debería buscar una cita', () => {
    const dummyCita = new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA');

    service.buscar(1).subscribe(respuesta => {
      expect(respuesta.id).toBe(1);
    });

    const req = httpMock.expectOne(apiEndpointCitasConsulta + '/1');
    expect(req.request.method).toBe('GET');
    req.event(new HttpResponse<Cita>({body: dummyCita}));
  });

  it('debería actualizar una cita', () => {
    const dummyCita = new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA');

    service.actualizar(dummyCita, 1).subscribe(respuesta => {
      expect(respuesta).toBe(1);
    });

    const req = httpMock.expectOne(apiEndpointCitasConsulta + '/1');
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
