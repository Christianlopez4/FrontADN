import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

import { ListarCitaComponent } from './listar-cita.component';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;
  let citaService: CitaService;
  const dataSource: Cita[] = [
    new Cita(1, new Date(), new Date(), 3000, 123, 'ACTIVA'),
    new Cita(2, new Date(), new Date(), 6000, 246, 'ACTIVA'),
    new Cita(3, new Date(), new Date(), 5000, 369, 'ACTIVA')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'consultar').and.returnValue(
      of(dataSource)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería listar las citas', () => {
    component.dataSource.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    });
  });

});
