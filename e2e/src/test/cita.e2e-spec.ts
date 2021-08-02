import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('Documento', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        cita = new CitaPage();
    });

    it('Debería listar citas', () => {
        page.navigateTo();
        navbar.clickBotonCitas();
        cita.clickBotonListarCitas();

        expect(19).toBe(cita.contarCitas());
    });


});
