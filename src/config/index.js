require("dotenv").config();

const config = {
  POSTGRES_USER: process.env.POSTGRES_USER || "postgres",
  POSTGRES_HOST: process.env.POSTGRES_HOST || "127.0.0.1",
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || "dbtest",
  POSTGRES_PASWORD: process.env.POSTGRES_PASWORD || "coolermaster1412",
  POSTGRES_PORT: process.env.POSTGRES_PORT || "5432",
};

module.exports = config;
