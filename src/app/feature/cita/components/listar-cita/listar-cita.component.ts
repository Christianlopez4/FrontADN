import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fecha', 'hora', 'costo', 'idPaciente', 'estado', 'acciones'];
  dataSource: Observable<Cita[]>;
  idCita: number;

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
    this.dataSource = this.citaService.consultar();
  }

  cancelarCita(id: number) {
    this.citaService.cancelar(id)
    .subscribe(res => {
      this.ngOnInit();
      this.idCita = res;
    });
  }

}
