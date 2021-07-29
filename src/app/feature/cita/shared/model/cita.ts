export class Cita {
    id: number;
    fecha: Date;
    hora: Date;
    costo: number;
    idPaciente: number;
    estado: string

    constructor(id: number, fecha: Date, hora: Date, costo: number, idPaciente: number, estado: string) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.costo = costo;
        this.idPaciente = idPaciente;
        this.estado = estado;
    }
}