import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { DocumentoPage } from '../page/documento/documento.po';

describe('Documento', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let documento: DocumentoPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        documento = new DocumentoPage();
    });

    it('Debería listar documentos', () => {
        page.navigateTo();
        navbar.clickBotonDocumentos();
        documento.clickBotonListarDocumentos();

        expect(3).toBe(documento.contarDocumentos());
    });


});
