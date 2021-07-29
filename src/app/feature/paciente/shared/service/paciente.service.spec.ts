import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  let service: PacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacienteService, HttpService]
    });
    service = TestBed.inject(PacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
