import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../shared/service/cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  citaForm: FormGroup;
  idCita: number;
  constructor(protected citaService: CitaService, private router: Router) {}

  ngOnInit() {
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      idPaciente: new FormControl('', [Validators.required]),
      estado: new FormControl('ACTIVA', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.citaService.guardar(this.citaForm.value)
    .subscribe(idCita => {
      this.idCita = idCita;
      this.router.navigate(['/cita/listar']);
    });
  }
}
