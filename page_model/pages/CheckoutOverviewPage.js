import { Selector } from 'testcafe';

class CheckoutOverviewPage {
    constructor() {
        this.pageTitle = Selector('.subheader');
    }
}

export default new CheckoutOverviewPage();