import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Paciente } from '../../shared/model/paciente';
import { PacienteService } from '../../shared/service/paciente.service';

import { ListarPacienteComponent } from './listar-paciente.component';

describe('ListarPacienteComponent', () => {
  let component: ListarPacienteComponent;
  let fixture: ComponentFixture<ListarPacienteComponent>;
  let pacienteService: PacienteService;
  const dataSource: Paciente[] = [
    new Paciente(123, 'Christian', 'Lopez', new Date(), 'christian@correo.com', 1112222, 1, 1),
    new Paciente(245, 'Paula', 'Orjuela', new Date(), 'paula@correo.com', 1112222, 1, 1),
    new Paciente(123, 'Natalia', 'Gonzalez', new Date(), 'natalia@correo.com', 1112222, 1, 1)
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPacienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PacienteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacienteComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    spyOn(pacienteService, 'consultar').and.returnValue(
      of(dataSource)
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three patients', () => {
    component.dataSource.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    })
  })

});
