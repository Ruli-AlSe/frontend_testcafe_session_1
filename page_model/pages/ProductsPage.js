import { Selector, t } from 'testcafe';

class ProductsPage {
    constructor() {
        this.pageTitle = Selector('.product_label');
        this.burgerMenuButton = Selector('#react-burger-menu-btn');
        this.logoutButton = Selector('#logout_sidebar_link');
        this.shoppingCartButton = Selector('#shopping_cart_container');
        this.firstA2CButton = Selector('.inventory_item:nth-of-type(1) .btn_primary.btn_inventory');
        this.secondA2CButton = Selector('.inventory_item:nth-of-type(2) .btn_primary.btn_inventory');
        this.fourthA2CButton = Selector('.inventory_item:nth-of-type(4) .btn_primary.btn_inventory');
        this.fifthA2CButton = Selector('.inventory_item:nth-of-type(5) .btn_primary.btn_inventory');
    }

    async addSingleItemToCart() {
        await t.click(this.firstA2CButton)
            .click(this.shoppingCartButton);
    }

    async addMultipleItemsToCart() {
        await t.click(this.firstA2CButton)
        .click(this.fifthA2CButton)
        .click(this.secondA2CButton)
        .click(this.fourthA2CButton)
        .click(this.shoppingCartButton);
    }
}

export default new ProductsPage();