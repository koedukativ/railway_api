const { Pool } = require("pg");

const dbConnection = new Pool({
  user: "zvmqsnxz",
  host: "kandula.db.elephantsql.com",
  database: "zvmqsnxz",
  password: "RTbgf3SRuu2rRTsq-9HVI_BYMlt95Wkt",
  port: "5432",
});

/* const dbConnection = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE_NAME,
    password: process.env.DB_PASS,
    port: 5432
})*/

module.exports = dbConnection;
