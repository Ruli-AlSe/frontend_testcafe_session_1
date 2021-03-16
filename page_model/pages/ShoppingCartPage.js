import { Selector } from 'testcafe';

class ShoppingCartPage {
    constructor() {
        this.pageTitle = Selector('.subheader');
        this.firstProduct = Selector('.cart_list .cart_item:nth-of-type(3) .inventory_item_name');
        this.secondProduct = Selector('.cart_list .cart_item:nth-of-type(4) .inventory_item_name');
        this.thirdProduct = Selector('.cart_list .cart_item:nth-of-type(5) .inventory_item_name');
        this.fourthProduct = Selector('.cart_list .cart_item:nth-of-type(6) .inventory_item_name');
    }
}

export default new ShoppingCartPage();