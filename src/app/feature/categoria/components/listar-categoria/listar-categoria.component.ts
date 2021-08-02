import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '@shared/services/categoria/service/categoria.service';
import { Categoria } from '@shared/services/categoria/model/categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cuotaModeradora', 'multa'];
  dataSource: Observable<Categoria[]>;

  constructor(protected categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.dataSource = this.categoriaService.consultar();
  }

}
