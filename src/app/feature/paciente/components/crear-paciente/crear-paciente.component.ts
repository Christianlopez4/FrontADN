import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../shared/service/paciente.service';
import { CategoriaService } from 'src/app/feature/categoria/shared/service/categoria.service';
import { DocumentoService } from 'src/app/feature/documento/shared/service/documento.service';
import { Categoria } from 'src/app/feature/categoria/shared/model/categoria';
import { Documento } from 'src/app/feature/documento/shared/model/documento';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  categorias: Categoria[] = [];
  documentos: Documento[] = [];

  constructor(
    protected pacienteService: PacienteService, 
    protected categoriaService: CategoriaService,
    protected documentoService: DocumentoService,
    protected formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.construirFormularioPaciente();
    this.cargarCategorias();
    this.cargarDocumentos();
  }

  private construirFormularioPaciente() {
    this.pacienteForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO), Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)]],
      apellidos: ['', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO), Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)]], 
      fechaNacimiento: [],
      correoElectronico: [],
      telefono: [],
      idCategoria: [],
      idDocumento: []
    })
  }

  private cargarCategorias() {
    this.categoriaService.consultar()
    .subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  private cargarDocumentos() {
    this.documentoService.consultar()
    .subscribe(documentos => {
      this.documentos = documentos;
    })
  }

  onSubmit() {
    alert('ok');
  }
}
