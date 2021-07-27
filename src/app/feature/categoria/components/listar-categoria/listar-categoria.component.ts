import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../shared/service/categoria.service';
import { Categoria } from '../../shared/model/categoria';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cuotaModeradora', 'multa'];
  dataSource: Categoria[] = [];

  constructor(protected categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.consultar()
    .subscribe(categorias => {
      this.dataSource = categorias;
    })
  }

}
