import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import { CREDENTIALS, PAGES_TITLES, PRODUCTS_NAMES } from '../data/Constants';

fixture('Products page testing')
    .page `https://www.saucedemo.com/`

test('Navigate to shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.click(ProductsPage.shoppingCartButton);

    await t.expect(ShoppingCartPage.pageTitle.exists).ok();
    await t.expect(ShoppingCartPage.pageTitle.innerText).eql(PAGES_TITLES.CART_PAGE);
});

test('Add a single item to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.click(ProductsPage.firstA2CButton)
        .click(ProductsPage.shoppingCartButton);

    await t.expect(ShoppingCartPage.firstProduct.innerText).eql(PRODUCTS_NAMES.FIRST_PRODUCT);
});

test('Add multiple items to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.click(ProductsPage.firstA2CButton)
        .click(ProductsPage.fifthA2CButton)
        .click(ProductsPage.secondA2CButton)
        .click(ProductsPage.fourthA2CButton)
        .click(ProductsPage.shoppingCartButton);

    await t.expect(ShoppingCartPage.firstProduct.innerText).eql(PRODUCTS_NAMES.FIRST_PRODUCT);
    await t.expect(ShoppingCartPage.secondProduct.innerText).eql(PRODUCTS_NAMES.FIFTH_PRODUCT);
    await t.expect(ShoppingCartPage.thirdProduct.innerText).eql(PRODUCTS_NAMES.SECOND_PRODUCT);
    await t.expect(ShoppingCartPage.fourthProduct.innerText).eql(PRODUCTS_NAMES.FOURTH_PRODUCT);
});