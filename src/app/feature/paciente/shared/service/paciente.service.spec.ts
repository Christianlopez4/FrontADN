import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  let httpMock: HttpTestingController;
  let service: PacienteService;
  const apiEndpointPacientesConsulta = `${environment.endpoint}/pacientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería listar los pacientes', () => {
    const dummyPacientes = [
      new Paciente(123, 'Christian', 'Lopez', new Date(), 'christian@correo.com', 1112222, 1, 1),
      new Paciente(245, 'Paula', 'Orjuela', new Date(), 'paula@correo.com', 1112222, 1, 1),
      new Paciente(123, 'Natalia', 'Gonzalez', new Date(), 'natalia@correo.com', 1112222, 1, 1)
    ];

    service.consultar().subscribe(respuesta => {
      expect(respuesta.length).toBe(3);
      expect(respuesta).toEqual(dummyPacientes);
    });

    const req = httpMock.expectOne(apiEndpointPacientesConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPacientes);
  });

  it('debería crear un paciente', () => {
    const dummyPaciente = new Paciente(123, 'Christian', 'Lopez', new Date(), 'christian@correo.com', 1112222, 1, 1);

    service.guardar(dummyPaciente).subscribe(respuesta => {
      expect(respuesta).toEqual(dummyPaciente.id);
    });

    const req = httpMock.expectOne(apiEndpointPacientesConsulta);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 123}));
  });

});
