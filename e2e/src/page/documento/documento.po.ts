import { by, element } from 'protractor';

export class DocumentoPage {

    private liskListarDocumentos = element(by.id('linkListarDocumento'));
    private listaDocumentos = element.all(by.id('trDocumento'));

    async clickBotonListarDocumentos() {
        await this.liskListarDocumentos.click();
    }

    async contarDocumentos() {
        return this.listaDocumentos.count();
    }

}
