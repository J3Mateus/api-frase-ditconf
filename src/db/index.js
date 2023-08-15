// db/db.js
const { Pool } = require('pg');
require('dotenv/config');
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

async function initializeTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS frases_motivacao (
            id SERIAL PRIMARY KEY,
            frase TEXT
        );
    `;
    
    try {
        await pool.query(createTableQuery);
        console.log('Tabela criada ou já existe.');
    } catch (error) {
        console.error('Erro ao criar a tabela:', error);
    }
}

module.exports = {
    pool,
    initializeTable,
};
