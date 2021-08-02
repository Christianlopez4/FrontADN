import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PacientePage } from '../page/paciente/paciente.po';

describe('Documento', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let paciente: PacientePage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        paciente = new PacientePage();
    });

    it('Debería listar pacientes', () => {
        page.navigateTo();
        navbar.clickBotonPacientes();
        paciente.clickBotonListarPacientes();

        expect(8).toBe(paciente.contarPacientes());
    });

    it('Debería crear un paciente', () => {
        const ID = 123;
        const NOMBRE = 'Christian';
        const APELLIDOS = 'López';
        const FECHA_NACIMIENTO = '1999-05-26';
        const CORREO = 'christian@correo.com';
        const TELEFONO = 1234567;
        const ID_CATEGORIA = 1;
        const ID_DOCUMENTO = 1;

        page.navigateTo();
        navbar.clickBotonPacientes();
        paciente.clickBotonCrearPaciente();

        paciente.ingresarId(ID);
        paciente.ingresarNombre(NOMBRE);
        paciente.ingresarApellidos(APELLIDOS);
        paciente.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        paciente.ingresarEmail(CORREO);
        paciente.ingresarTelefono(TELEFONO);
        paciente.ingresarCategoria(ID_CATEGORIA);
        paciente.ingresarDocumento(ID_DOCUMENTO);
    });

});
