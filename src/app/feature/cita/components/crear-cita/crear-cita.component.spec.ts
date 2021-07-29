import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CrearCitaComponent } from './crear-cita.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;
  const valorEsperado: number = 1;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
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
      providers: [CitaService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);

    spyOn(citaService, 'guardar').and.returnValue(
      of(valorEsperado)
    )

    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('add medical appointment', () => {
    (<HTMLInputElement>document.getElementById('fechaCita')).value = '2021-7-29';
    (<HTMLInputElement>document.getElementById('horaCita')).value = '14:00:00';
    (<HTMLInputElement>document.getElementById('idPacienteCita')).value = '123';

    document.getElementById('submit').click();

    expect(component.idCita).toBe(valorEsperado);
  });

});
