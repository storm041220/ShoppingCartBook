require('dotenv').config();
module.exports = {
    AUTH_TOKEN_SECRET: {
        TOKEN: process.env.SECRET,
    }
}
