import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCategoria = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkDocumento = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkPaciente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));
    linkCita = element(by.xpath('/html/body/app-root/app-navbar/nav/a[6]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonCategorias() {
        await this.linkCategoria.click();
    }

    async clickBotonDocumentos() {
        await this.linkDocumento.click();
    }

    async clickBotonPacientes() {
        await this.linkPaciente.click();
    }

    async clickBotonCitas() {
        await this.linkCita.click();
    }

}
