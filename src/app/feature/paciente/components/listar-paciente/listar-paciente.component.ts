import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteService } from '../../shared/service/paciente.service';
import { Paciente } from './../../shared/model/paciente';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'fechaNacimiento', 'correoElectronico', 'telefono', 'idCategoria', 'idDocumento'];
  dataSource: Observable<Paciente[]>;

  constructor(protected pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.dataSource = this.pacienteService.consultar();
  }

}
