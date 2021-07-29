import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CrearPacienteComponent } from './crear-paciente.component';
import { PacienteService } from '../../shared/service/paciente.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;
  let pacienteService: PacienteService;
  const valorEsperado: number = 123;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPacienteComponent ],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ],
      providers: [PacienteService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPacienteComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);

    spyOn(pacienteService, 'guardar').and.returnValue(
      of(valorEsperado)
    )
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('add patient', () => {
    (<HTMLInputElement>document.getElementById('idPaciente')).value = '123';
    (<HTMLInputElement>document.getElementById('idDocumento')).value = '1';
    (<HTMLInputElement>document.getElementById('nombrePaciente')).value = 'Christian';
    (<HTMLInputElement>document.getElementById('apellidosPaciente')).value = 'Lopez';
    (<HTMLInputElement>document.getElementById('emailPaciente')).value = 'christian@correo.com';
    (<HTMLInputElement>document.getElementById('telefonoPaciente')).value = '1234567';
    (<HTMLInputElement>document.getElementById('idCategoria')).value = '1';
    (<HTMLInputElement>document.getElementById('fechaNacimientoPaciente')).value = '1999-5-26';

    document.getElementById('submit').click();

    expect(component.idPaciente).toBe(123);
  })

});
