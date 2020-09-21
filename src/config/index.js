require('dotenv').config();

const config = {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PWD: process.env.POSTGRES_PWD,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
};

module.exports = config;
