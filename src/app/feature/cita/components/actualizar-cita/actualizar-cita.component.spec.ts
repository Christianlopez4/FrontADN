import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

import { ActualizarCitaComponent } from './actualizar-cita.component';

describe('ActualizarCitaComponent', () => {
  let component: ActualizarCitaComponent;
  let fixture: ComponentFixture<ActualizarCitaComponent>;
  let citaService: CitaService;
  const valorEsperado = 1;
  const cita = new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [CitaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);

    spyOn(citaService, 'actualizar').and.returnValue(
        of(valorEsperado)
    );
    spyOn(citaService, 'buscar').and.returnValue(
        of(cita)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería actualizar una cita', () => {

    (document.getElementById('fechaCita') as HTMLInputElement).value = '2021-8-9';
    (document.getElementById('horaCita') as HTMLInputElement).value = '14:00:00';

    document.getElementById('submit').click();

    expect(component.idCita).toBe(valorEsperado);
});

});
