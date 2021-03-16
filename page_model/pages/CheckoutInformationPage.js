import { Selector, t } from 'testcafe';
import { USER_INFORMATION } from '../data/Constants';

class CheckoutInformationPage {
    constructor() {
        this.firstNameField = Selector('#first-name');
        this.lastNameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        this.continueButton = Selector('.btn_primary.cart_button');
        this.errorMessage = Selector('h3[data-test="error"]');
    }

    async fillUserInfo() {
        await t.typeText(this.firstNameField, USER_INFORMATION.FIRST_NAME);
        await t.typeText(this.lastNameField, USER_INFORMATION.LAST_NAME);
        await t.typeText(this.zipCodeField, USER_INFORMATION.ZIP_CODE);
    }
}

export default new CheckoutInformationPage();