export class Categoria {
    id: number;
    titulo: string;
    cuotaModeradora: number;
    multa: number;

    constructor(id: number, titulo: string, cuotaModeradora: number, multa: number) {
        this.id = id;
        this.titulo = titulo;
        this.cuotaModeradora = cuotaModeradora;
        this.multa = multa;
    }
}
