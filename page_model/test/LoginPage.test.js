import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

fixture('Login feature testing').page `https://www.saucedemo.com/`;

test('Login with valid user', async t => {
    await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton);
    
    await t
        .expect(ProductsPage.pageTitle.exists).ok();
});

test('Login with an invalid user', async t => {
    await t
        .typeText(LoginPage.usernameField, 'invalid_username')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton);
    
    await t.expect(LoginPage.errorMessage.exists).ok();
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
});

test('Logout from Product\'s page', async t => {
    await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(ProductsPage.burgerMenuButton)
        .click(ProductsPage.logoutButton);
    
    await t.expect(LoginPage.loginForm.exists).ok();
});
