import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import { CREDENTIALS, PAGES_TITLES, PRODUCTS_NAMES } from '../data/Constants';

fixture('Products page testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Navigate to shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.click(ProductsPage.shoppingCartButton);

    await t.expect(ShoppingCartPage.pageTitle.exists).ok();
    await t.expect(ShoppingCartPage.pageTitle.innerText).eql(PAGES_TITLES.CART_PAGE);
});

test('Add a single item to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addSingleItemToCart();

    await t.expect(ShoppingCartPage.firstProduct.innerText).eql(PRODUCTS_NAMES.FIRST_PRODUCT);
});

test('Add multiple items to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await ProductsPage.addMultipleItemsToCart();

    await t.expect(ShoppingCartPage.firstProduct.innerText).eql(PRODUCTS_NAMES.FIRST_PRODUCT);
    await t.expect(ShoppingCartPage.secondProduct.innerText).eql(PRODUCTS_NAMES.FIFTH_PRODUCT);
    await t.expect(ShoppingCartPage.thirdProduct.innerText).eql(PRODUCTS_NAMES.SECOND_PRODUCT);
    await t.expect(ShoppingCartPage.fourthProduct.innerText).eql(PRODUCTS_NAMES.FOURTH_PRODUCT);
});