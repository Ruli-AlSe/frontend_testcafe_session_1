import { Selector } from 'testcafe';

class CheckoutOverviewPage {
    constructor() {
        this.pageTitle = Selector('.subheader');
        this.firstItem = Selector('.cart_item:nth-of-type(3) .inventory_item_name');
        this.secondItem = Selector('.cart_item:nth-of-type(4) .inventory_item_name');
        this.thirdItem = Selector('.cart_item:nth-of-type(5) .inventory_item_name');
        this.fourthItem = Selector('.cart_item:nth-of-type(6) .inventory_item_name');
        this.finishButton = Selector('.btn_action.cart_button');
    }
}

export default new CheckoutOverviewPage();