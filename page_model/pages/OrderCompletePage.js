import { Selector } from 'testcafe';

class OrderCompletePage {
    constructor() {
        this.pageTitle = Selector('.subheader');
        this.thankYouMessage = Selector('.complete-header');
    }
}

export default new OrderCompletePage();