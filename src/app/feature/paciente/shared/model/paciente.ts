export class Paciente {
    id: number;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    correoElectronico: string;
    telefono: number;
    idCategoria: number;
    idDocumento: number;

    constructor(id: number, name: string, lastname: string, birthday: Date, email: string, telefono: number, idCat: number, idDoc: number) {
        this.id = id;
        this.nombre = name;
        this.apellidos = lastname;
        this.fechaNacimiento = birthday;
        this.correoElectronico = email;
        this.telefono = telefono;
        this.idCategoria = idCat;
        this.idDocumento = idDoc;
    }
}
