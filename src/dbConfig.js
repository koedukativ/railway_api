const { Pool } = require("pg");

const dbConnection = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = dbConnection;
