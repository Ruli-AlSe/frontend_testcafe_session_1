import { Selector } from 'testcafe';

class ProductsPage {
    constructor() {
        this.pageTitle = Selector('.product_label');
        this.burgerMenuButton = Selector('#react-burger-menu-btn');
        this.logoutButton = Selector('#logout_sidebar_link');
    }
}

export default new ProductsPage();