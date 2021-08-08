import { by, element } from 'protractor';

export class CitaPage {

    private linkListarCitas = element(by.id('linkListarCitas'));
    private linkCrearCita = element(by.id('linkCrearCita'));
    private listaCitas = element.all(by.id('trCita'));
    private linkActualizarCita = element.all(by.id('linkActualizarCita')).get(0);
    private linkCancelarCita = element.all(by.id('linkCancelarCita')).get(0);
    private inputFecha = element(by.id('fechaCita'));
    private inputHora = element(by.id('horaCita'));
    private inputIdPaciente = element(by.id('idPacienteCita'));
    private buttonCrearCita = element(by.id('submit'));

    private inputFechaActualizar = element(by.id('fechaCita1'));
    private inputHoraActualizar = element(by.id('horaCita1'));
    private inputIdPacienteActualizar = element(by.id('idPacienteCita1'));
    private buttonActualizarCita = element(by.id('submit1'));

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }

    async clickBotonCrearCita() {
        await this.linkCrearCita.click();
    }

    async contarCitas() {
        return this.listaCitas.count();
    }

    async clickBotonActualizarCita() {
        await this.linkActualizarCita.click();
    }

    async clickBotonCancelarCita() {
        await this.linkCancelarCita.click();
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async ingresarHora(hora) {
        await this.inputHora.sendKeys(hora);
    }

    async ingresarIdPaciente(idPaciente) {
        await this.inputIdPaciente.sendKeys(idPaciente);
    }

    async guardarCita() {
        await this.buttonCrearCita.click();
    }

    async ingresarFechaActualizar(fecha) {
        await this.inputFechaActualizar.sendKeys(fecha);
    }

    async ingresarHoraActualizar(hora) {
        await this.inputHoraActualizar.sendKeys(hora);
    }

    async ingresarIdPacienteActualizar(idPaciente) {
        await this.inputIdPacienteActualizar.sendKeys(idPaciente);
    }

    async actualizarCita() {
        await this.buttonActualizarCita.click();
    }

}
