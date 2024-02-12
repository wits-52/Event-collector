const config = require('../config');
const { Pool } = require('pg');

const pool = new Pool({
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DBNAME
});

module.exports = {
    pool
};