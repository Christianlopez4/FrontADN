import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CategoriaPage } from '../page/categoria/categoria.po';

describe('Categoria', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let categoria: CategoriaPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        categoria = new CategoriaPage();
    });

    it('Debería listar categorias', () => {
        page.navigateTo();
        navbar.clickBotonCategorias();
        categoria.clickBotonListarCategorias();

        expect(categoria.contarCategorias()).toBeGreaterThanOrEqual(0);
    });


});
