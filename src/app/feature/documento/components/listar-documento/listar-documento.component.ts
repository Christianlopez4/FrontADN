import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '@shared/services/documento/service/documento.service';
import { Documento } from '@shared/services/documento/model/documento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-documento',
  templateUrl: './listar-documento.component.html',
  styleUrls: ['./listar-documento.component.css']
})
export class ListarDocumentoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo'];
  dataSource: Observable<Documento[]>;

  constructor(protected documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.dataSource = this.documentoService.consultar();
  }

}
