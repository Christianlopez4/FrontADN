import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fecha', 'hora', 'costo', 'idPaciente', 'estado'];
  dataSource: Cita[] = [];

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
    this.citaService.consultar()
    .subscribe(citas => {
      this.dataSource = citas;
      console.log(citas);
    })
  }

}
