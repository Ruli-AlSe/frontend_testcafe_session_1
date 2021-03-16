const dotenv = require('dotenv').config();

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: dotenv.parsed.USERNAME,
        PASSWORD: dotenv.parsed.PASSWORD
    },
    INVALID_USER: {
        USERNAME: 'invalid_username',
        PASSWORD: 'invalid_password'
    }
}

export const PAGES_TITLES = {
    CART_PAGE: 'Your Cart',
    PRODUCTS_PAGE: 'Products',
    CHECKOUT_INFO_PAGE: 'Checkout: Your Information',
    CHECKOUT_OVERVIEW_PAGE: 'Checkout: Overview',
    ORDER_COMPLETE_PAGE: {
        TITLE: 'Finish',
        MESSAGE: 'THANK YOU FOR YOUR ORDER'
    }
}

export const PRODUCTS_NAMES = {
    FIRST_PRODUCT: 'Sauce Labs Backpack',
    SECOND_PRODUCT: 'Sauce Labs Bike Light',
    FOURTH_PRODUCT: 'Sauce Labs Fleece Jacket',
    FIFTH_PRODUCT: 'Sauce Labs Onesie'
}

export const USER_INFORMATION = {
    FIRST_NAME: 'Raul',
    LAST_NAME: 'Almanza',
    ZIP_CODE: '38400'
}