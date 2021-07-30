import { by, element } from 'protractor';

export class DocumentoPage {

    private linkListarDocumentos = element(by.id('linkListarDocumento'));
    private listaDocumentos = element.all(by.id('trDocumento'));

    async clickBotonListarDocumentos() {
        await this.linkListarDocumentos.click();
    }

    async contarDocumentos() {
        return this.listaDocumentos.count();
    }

}
