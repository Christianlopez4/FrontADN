import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let service: CitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
