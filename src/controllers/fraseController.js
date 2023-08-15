const {pool } = require('../db');
const sql = require('../db/sql');

const getAll = async (req, res, next) => {
    try {
        const frases = await pool.query(sql.getAllFrase);
        res.status(200).json(frases.rows);
    } catch (error) {
        console.error('Erro ao buscar frases:', error);
        // Retornar uma lista de frases pré-definida em caso de erro na conexão ao banco de dados
        const fallbackFrases = [
            {
                "id": 1,
                "frase": "A jornada de mil milhas começa com o primeiro passo."
            },
            {
                "id": 2,
                "frase": "Acredite em você mesmo e tudo será possível."
            },
            {
                "id": 3,
                "frase": "Grandes coisas nunca vêm de zonas de conforto."
            },
            {
                "id": 4,
                "frase": "Não importa o quão devagar você vá, desde que não pare."
            },
            {
                "id": 5,
                "frase": "Acredite em você mesmo e tudo será possível."
            },
            {
                "id": 6,
                "frase": "O sucesso é a soma de pequenos esforços repetidos dia após dia."
            },
            {
                "id": 7,
                "frase": "As dificuldades preparam pessoas comuns para destinos extraordinários."
            },
        ];
        res.status(200).json(fallbackFrases);
    }
};

const getByID = async (req, res, next) => {
    const { id } = req.params;
    try {
        const frase = await pool.query(sql.getFraseByID, [id]);
        res.status(200).json(frase.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar frase por ID:', error);
        res.status(500).send('Erro ao buscar frase por ID');
    }
};

const postAll = async (req, res, next) => {
    try {
        const frases = await pool.query(sql.getAllFrase);
        if (frases.rowCount === 241) {
            res.status(201).send('Requisição recebida com sucesso!');
            console.log("Entrou aqui");
            return;
        }

        await pool.query(sql.insertFrase);
        res.status(201).send('Requisição recebida com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar nova frase:', error);
        res.status(500).send('Erro ao adicionar nova frase');
    }
};


const updateFrase = async (req, res, next) => {
    const { id } = req.params;
    const { frase } = req.body;
    try {
        const result = await pool.query(sql.updateFrase, [frase, id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar frase:', error);
        res.status(500).send('Erro ao atualizar frase');
    }
};

const deleteFrase = async (req, res, next) => {
    const { id } = req.params;
    try {
        await pool.query(sql.deleteFrase, [id]);
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.error('Erro ao deletar frase:', error);
        res.status(500).send('Erro ao deletar frase');
    }
};

module.exports = {
    getAll,
    getByID,
    postAll,
    updateFrase,
    deleteFrase,
}