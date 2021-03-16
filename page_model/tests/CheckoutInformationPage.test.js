import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import CheckoutInformationPage from '../pages/CheckoutInformationPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import { CREDENTIALS, PAGES_TITLES } from '../data/Constants';

fixture('Checkout Information page testing').page `https://www.saucedemo.com/`;

test('Continue with missing mail information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addSingleItemToCart();
    await t.click(ShoppingCartPage.checkoutButton)
        .click(CheckoutInformationPage.continueButton)
    
    await t.expect(CheckoutInformationPage.errorMessage.exists).ok();
    await t.expect(CheckoutInformationPage.errorMessage.innerText).eql('Error: First Name is required');
});

test('Fill user\'s information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addSingleItemToCart();
    await t.click(ShoppingCartPage.checkoutButton);
    await CheckoutInformationPage.fillUserInfo();
    await t.click(CheckoutInformationPage.continueButton);
    
    await t.expect(CheckoutOverviewPage.pageTitle.exists).ok();
    await t.expect(CheckoutOverviewPage.pageTitle.innerText).eql(PAGES_TITLES.CHECKOUT_OVERVIEW_PAGE);
});
