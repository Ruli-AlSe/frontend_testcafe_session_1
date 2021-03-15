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