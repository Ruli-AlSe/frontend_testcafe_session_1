import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import CheckoutInformationPage from '../pages/CheckoutInformationPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import OrderCompletePage from '../pages/OrderCompletePage';
import { CREDENTIALS, PRODUCTS_NAMES, PAGES_TITLES } from '../data/Constants';

fixture('Checkout Overview page testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Final order items', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addMultipleItemsToCart();
    await t.click(ShoppingCartPage.checkoutButton);
    await CheckoutInformationPage.fillUserInfo();
    await t.click(CheckoutInformationPage.continueButton);

    await t.expect(CheckoutOverviewPage.firstItem.innerText).eql(PRODUCTS_NAMES.FIRST_PRODUCT);
    await t.expect(CheckoutOverviewPage.secondItem.innerText).eql(PRODUCTS_NAMES.FIFTH_PRODUCT);
    await t.expect(CheckoutOverviewPage.thirdItem.innerText).eql(PRODUCTS_NAMES.SECOND_PRODUCT);
    await t.expect(CheckoutOverviewPage.fourthItem.innerText).eql(PRODUCTS_NAMES.FOURTH_PRODUCT);
});

test('Complete a purchase', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addMultipleItemsToCart();
    await t.click(ShoppingCartPage.checkoutButton);
    await CheckoutInformationPage.fillUserInfo();
    await t.click(CheckoutInformationPage.continueButton)
        .click(CheckoutOverviewPage.finishButton);

    await t.expect(OrderCompletePage.pageTitle.innerText).eql(PAGES_TITLES.ORDER_COMPLETE_PAGE.TITLE);
    await t.expect(OrderCompletePage.thankYouMessage.innerText).eql(PAGES_TITLES.ORDER_COMPLETE_PAGE.MESSAGE);
});