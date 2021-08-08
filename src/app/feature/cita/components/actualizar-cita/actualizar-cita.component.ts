import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {

  citaForm: FormGroup;
  cita: Cita;

  constructor(private route: ActivatedRoute, protected citaService: CitaService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.buscarCita(params.id);
    });
  }

  buscarCita(id: number) {
    this.citaService.buscar(id)
    .subscribe(res => {
      this.cita = res;
      this.construirFormularioCita();
    });
  }

  actualizarCita() {
    this.citaService.actualizar(this.citaForm.value, this.cita.id)
    .subscribe(() => {
      alert('Cita actualizada');
      this.router.navigate(['/cita']);
    });
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      fecha: new FormControl(this.cita.fecha, [Validators.required]),
      hora: new FormControl(this.cita.hora, [Validators.required]),
      costo: new FormControl(this.cita.costo, [Validators.required]),
      idPaciente: new FormControl({value: this.cita.idPaciente, disabled: true}, [Validators.required]),
      estado: new FormControl(this.cita.estado, [Validators.required]),
    });
  }

}
