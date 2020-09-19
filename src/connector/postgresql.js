const { Pool } = require('pg');
const config = require('../config');

const pgConfig = {
    user: config.POSTGRES_USER,
    host: config.POSTGRES_HOST,
    database: config.POSTGRES_DB,
    password: config.POSTGRES_PSW,
    port: config.POSTGRES_PORT,
};
const pool = new Pool(pgConfig);

/**
 * @param {string} sql_query
 */
const query = async (sql_query) => {
    console.log('sql_query :>> ', sql_query);

    const client = await pool.connect();
    try {
        const res = await client.query(sql_query);

        console.log('res.rows :>> ', res.rows);

        return res;
    } catch (error) {
        console.log('query error.message :>> ', error.message);

        throw error;
    } finally {
        client.release();
    }
};

module.exports.postgresql = {
    query,
};
