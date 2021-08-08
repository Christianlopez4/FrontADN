import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';

import { CategoriaService } from './categoria.service';

describe('CategoriaService', () => {
  let httpMock: HttpTestingController;
  let service: CategoriaService;
  const apiEndpointCategoriasConsulta = `${environment.endpoint}/categorias`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería listar las categorias', () => {
    const dummyCategorias: Categoria[] = [
      new Categoria(1, 'A', 3000, 5000),
      new Categoria(2, 'B', 5000, 8000),
      new Categoria(3, 'C', 8000, 12000)
    ];

    service.consultar().subscribe(respuesta => {
      expect(respuesta.length).toBe(3);
      expect(respuesta).toEqual(dummyCategorias);
    });

    const req = httpMock.expectOne(apiEndpointCategoriasConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategorias);

  });

});
