export class Paciente {
    id: number;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    correoElectronico: string;
    telefono: number;
    idCategoria: number;
    idDocumento: number;

    constructor(id: number, nombre: string, apellidos: string, fechaNacimiento: Date, correoElectronico: string, telefono: number, idCategoria: number, idDocumento: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.correoElectronico = correoElectronico;
        this.telefono = telefono;
        this.idCategoria = idCategoria;
        this.idDocumento = idDocumento;
    }
}
