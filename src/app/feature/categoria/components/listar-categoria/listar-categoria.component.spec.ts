import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaService } from '@shared/services/categoria/service/categoria.service';
import { HttpService } from 'src/app/core/services/http.service';

import { ListarCategoriaComponent } from './listar-categoria.component';
import { Categoria } from '@shared/services/categoria/model/categoria';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListarCategoriaComponent', () => {
  let component: ListarCategoriaComponent;
  let fixture: ComponentFixture<ListarCategoriaComponent>;
  let categoriaService: CategoriaService;
  const dataSource: Categoria[] = [
    new Categoria(1, 'A', 3000, 5000),
    new Categoria(2, 'B', 5000, 8000),
    new Categoria(3, 'C', 8000, 12000)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCategoriaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CategoriaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCategoriaComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, 'consultar').and.returnValue(
      of(dataSource)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three categories', () => {
    component.dataSource.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    });
  });

});
