import { by, element } from 'protractor';

export class CitaPage {

    private linkListarCitas = element(by.id('linkListarCitas'));
    private linkCrearCita = element(by.id('linkCrearCita'));
    private listaCitas = element.all(by.id('trCita'));

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }

    async clickBotonCrearCita() {
        await this.linkCrearCita.click();
    }

    async contarCitas() {
        return this.listaCitas.count();
    }

}
