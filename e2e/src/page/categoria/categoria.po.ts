import { by, element } from 'protractor';

export class CategoriaPage {

    private linkListarCategorias = element(by.id('linkListarCategoria'));
    private listaCategorias = element.all(by.id('trCategoria'));

    async clickBotonListarCategorias() {
        await this.linkListarCategorias.click();
    }

    async contarCategorias() {
        return this.listaCategorias.count();
    }

}
