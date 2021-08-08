import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';

import { CrearPacienteComponent } from './crear-paciente.component';
import { PacienteService } from '../../shared/service/paciente.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriaService } from '@shared/services/categoria/service/categoria.service';
import { DocumentoService } from '@shared/services/documento/service/documento.service';
import { Categoria } from '@shared/services/categoria/model/categoria';
import { Documento } from '@shared/services/documento/model/documento';

describe('CrearPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;
  let pacienteService: PacienteService;
  let documentoService: DocumentoService;
  let categoriaService: CategoriaService;
  const categorias: Categoria[] = [
    new Categoria(1, 'A', 3000, 5000),
    new Categoria(2, 'B', 5000, 8000),
    new Categoria(3, 'C', 8000, 12000)
  ];
  const documentos: Documento[] = [
    new Documento(1, 'Doc1'),
    new Documento(2, 'Doc2'),
    new Documento(3, 'Doc3')
  ];

  const valorEsperado = 123;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPacienteComponent ],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        RouterTestingModule
      ],
      providers: [PacienteService, CategoriaService, DocumentoService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPacienteComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    documentoService = TestBed.inject(DocumentoService);
    categoriaService = TestBed.inject(CategoriaService);

    spyOn(pacienteService, 'guardar').and.returnValue(
      of(valorEsperado)
    );
    spyOn(documentoService, 'consultar').and.returnValue(
      of(documentos)
    );
    spyOn(categoriaService, 'consultar').and.returnValue(
      of(categorias)
    );
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar un paciente', () => {
    (document.getElementById('idPaciente') as HTMLInputElement).value = '123';
    (document.getElementById('idDocumento') as HTMLInputElement).value = '1';
    (document.getElementById('nombrePaciente') as HTMLInputElement).value = 'Christian';
    (document.getElementById('apellidosPaciente') as HTMLInputElement).value = 'Lopez';
    (document.getElementById('emailPaciente') as HTMLInputElement).value = 'christian@correo.com';
    (document.getElementById('telefonoPaciente') as HTMLInputElement).value = '1234567';
    (document.getElementById('idCategoria') as HTMLInputElement).value = '1';
    (document.getElementById('fechaNacimientoPaciente') as HTMLInputElement).value = '1999-5-26';

    document.getElementById('submit').click();

    expect(component.idPaciente).toBe(123);
  });

  it('debería listar categorias', () => {
    expect(component.categorias.length).toBe(3);
    expect(component.categorias).toEqual(categorias);
  });

  it('debería listar documentos', () => {
    expect(component.documentos.length).toBe(3);
    expect(component.documentos).toEqual(documentos);
  });

});
