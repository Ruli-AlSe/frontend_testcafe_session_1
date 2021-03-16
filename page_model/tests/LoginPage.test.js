import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import { CREDENTIALS, PAGES_TITLES } from '../data/Constants';

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Login with valid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.expect(ProductsPage.pageTitle.exists).ok();
    await t.expect(ProductsPage.pageTitle.innerText).eql(PAGES_TITLES.PRODUCTS_PAGE);
});

test('Login with an invalid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD);
    
    await t.expect(LoginPage.errorMessage.exists).ok();
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
});

test('Logout from Product\'s page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t
        .click(ProductsPage.burgerMenuButton)
        .click(ProductsPage.logoutButton);
    
    await t.expect(LoginPage.loginForm.exists).ok();
});
