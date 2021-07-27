import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../shared/service/documento.service';
import { Documento } from '../../shared/model/documento';

@Component({
  selector: 'app-listar-documento',
  templateUrl: './listar-documento.component.html',
  styleUrls: ['./listar-documento.component.css']
})
export class ListarDocumentoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo'];
  dataSource: Documento[] = [];

  constructor(protected documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.documentoService.consultar()
    .subscribe(documentos => {
      this.dataSource = documentos;
    })
  }

}
