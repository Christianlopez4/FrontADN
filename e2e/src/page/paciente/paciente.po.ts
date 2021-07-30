import { by, element } from 'protractor';

export class PacientePage {

    private linkListarPaciente = element(by.id('linkListarPaciente'));
    private linkCrearPaciente = element(by.id('linkCrearPaciente'));
    private listaPacientes = element.all(by.id('trPaciente'));
    private inputIdPaciente = element(by.id('idPaciente'));
    private inputIdDocumento = element(by.id('idDocumento'));
    private inputNombre = element(by.id('nombrePaciente'));
    private inputApellidos = element(by.id('apellidosPaciente'));
    private inputEmail = element(by.id('emailPaciente'));
    private inputTelefono = element(by.id('telefonoPaciente'));
    private inputIdCategoria = element(by.id('idCategoria'));
    private inputFechaNacimiento = element(by.id('fechaNacimientoPaciente'));

    async clickBotonListarPacientes() {
        await this.linkListarPaciente.click();
    }

    async clickBotonCrearPaciente() {
        await this.linkCrearPaciente.click();
    }

    async contarPacientes() {
        return this.listaPacientes.count();
    }

    async ingresarId(idPaciente) {
        await this.inputIdPaciente.sendKeys(idPaciente);
    }

    async ingresarDocumento(idDocumento) {
        await this.inputIdDocumento.sendKeys(idDocumento);
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarApellidos(apellidos) {
        await this.inputApellidos.sendKeys(apellidos);
    }

    async ingresarEmail(email) {
        await this.inputEmail.sendKeys(email);
    }

    async ingresarTelefono(telefono) {
        await this.inputTelefono.sendKeys(telefono);
    }

    async ingresarCategoria(idCategoria) {
        await this.inputIdCategoria.sendKeys(idCategoria);
    }

    async ingresarFechaNacimiento(fechaNacimiento) {
        await this.inputFechaNacimiento.sendKeys(fechaNacimiento);
    }
}
