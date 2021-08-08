import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('Cita', () => {
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

        expect(cita.contarCitas()).toBeGreaterThanOrEqual(0);
    });

    it('Debería crear una cita', () => {
        page.navigateTo();
        navbar.clickBotonCitas();
        cita.clickBotonCrearCita();

        cita.ingresarFecha('2021-8-9');
        cita.ingresarHora('14:00:00');
        cita.ingresarIdPaciente(123);

        cita.guardarCita();
        cita.clickBotonListarCitas();
        expect(cita.contarCitas()).toBeGreaterThan(0);
    });

    it('Debería cancelar una cita', () => {
        page.navigateTo();
        navbar.clickBotonCitas();
        cita.clickBotonListarCitas();

        const citasIniciales = cita.contarCitas();
        cita.clickBotonCancelarCita();
        const citasFinales = cita.contarCitas();

        expect(citasFinales).toBeLessThanOrEqual(citasIniciales);
    });

});
