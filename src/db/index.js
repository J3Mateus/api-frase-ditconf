// db/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'frases-db',
    port: 5432, // Porta padrão do PostgreSQL
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
