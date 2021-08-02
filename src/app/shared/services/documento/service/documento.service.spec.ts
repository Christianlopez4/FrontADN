import { TestBed } from '@angular/core/testing';

import { DocumentoService } from './documento.service';

describe('DocumentoService', () => {
  let service: DocumentoService;
  let httpServiceSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['doGet']);
    service = new DocumentoService(httpServiceSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
