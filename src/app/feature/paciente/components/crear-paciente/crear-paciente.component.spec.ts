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

describe('CrearPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;
  let pacienteService: PacienteService;
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

    spyOn(pacienteService, 'guardar').and.returnValue(
      of(valorEsperado)
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

});
