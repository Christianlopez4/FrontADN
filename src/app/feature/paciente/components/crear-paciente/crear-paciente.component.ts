import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../shared/service/paciente.service';
import { CategoriaService } from '@shared/services/categoria/service/categoria.service';
import { DocumentoService } from '@shared/services/documento/service/documento.service';
import { Categoria } from '@shared/services/categoria/model/categoria';
import { Documento } from '@shared/services/documento/model/documento';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  categorias: Categoria[] = [];
  documentos: Documento[] = [];
  idPaciente: number;

  constructor(
    protected pacienteService: PacienteService, 
    protected categoriaService: CategoriaService,
    protected documentoService: DocumentoService,
    ) {}

  ngOnInit() {
    this.construirFormularioPaciente();
    this.cargarCategorias();
    this.cargarDocumentos();
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]), 
      fechaNacimiento: new FormControl('', [Validators.required]),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      idCategoria: new FormControl('', [Validators.required]),
      idDocumento: new FormControl('', [Validators.required])
    });
    
  }

  private cargarCategorias() {
    this.categoriaService.consultar()
    .subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  private cargarDocumentos() {
    this.documentoService.consultar()
    .subscribe(documentos => {
      this.documentos = documentos;
    });
  }

  onSubmit() {
    this.pacienteService.guardar(this.pacienteForm.value)
    .subscribe(idPaciente => {
      alert('Paciente creado satisfactoriamente');
      this.idPaciente = idPaciente;
    });
  }
}
