import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria.service';

describe('CategoriaService', () => {
  let httpServiceSpy: { get: jasmine.Spy };
  let categoriaService: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['doGet']);
    categoriaService = new CategoriaService(httpServiceSpy as any);
  });

  it('should be created', () => {
    expect(categoriaService).toBeTruthy();
  });

});
