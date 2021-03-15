import { Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('.btn_action');
        this.errorMessage = Selector('h3[data-test="error"]');
        this.loginForm = Selector('.login_wrapper');
    }
}

export default new LoginPage();