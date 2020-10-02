const { Pool } = require('pg');

console.log("connecting to: ", process.env.DB_HOST);

const dbConnection = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE_NAME,
    password: process.env.DB_PASS,
    port: 5432
})


module.exports = dbConnection;