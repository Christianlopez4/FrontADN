import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';

import { CrearCitaComponent } from './crear-cita.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;
  const valorEsperado = 1;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);

    spyOn(citaService, 'guardar').and.returnValue(
      of(valorEsperado)
    );

    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar una cita', () => {

    (document.getElementById('fechaCita') as HTMLInputElement).value = '2021-7-29';
    (document.getElementById('horaCita') as HTMLInputElement).value = '14:00:00';
    (document.getElementById('idPacienteCita') as HTMLInputElement).value = '123';

    document.getElementById('submit').click();

    expect(component.idCita).toBe(valorEsperado);
  });

});
