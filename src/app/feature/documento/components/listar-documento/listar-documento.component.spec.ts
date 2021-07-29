import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListarDocumentoComponent } from './listar-documento.component';
import { DocumentoService } from '../../shared/service/documento.service';
import { HttpService } from '@core/services/http.service';
import { Documento } from '../../shared/model/documento';
import { of } from 'rxjs';

describe('ListarDocumentoComponent', () => {
  let component: ListarDocumentoComponent;
  let fixture: ComponentFixture<ListarDocumentoComponent>;
  let documentoService: DocumentoService;
  const dataSource: Documento[] = [
    new Documento(1, 'Doc1'),
    new Documento(2, 'Doc2'),
    new Documento(3, 'Doc3')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDocumentoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [DocumentoService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDocumentoComponent);
    component = fixture.componentInstance;
    documentoService = TestBed.inject(DocumentoService);
    spyOn(documentoService, 'consultar').and.returnValue(
      of(dataSource)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three documents', () => {
    component.dataSource.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    });
  });

});
