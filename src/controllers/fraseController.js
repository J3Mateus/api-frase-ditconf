const {pool } = require('../db');
const sql = require('../db/sql');

const getAll = async (req, res, next) => {
    const frases = await pool.query(sql.getAllFrase);
    res.status(200).json(frases.rows);
};

const getByID = async (req,res,next) => {
    const { id } = req.params
    const frase = await pool.query(sql.getFraseByID,[id]);
    res.status(200).json(frase.rows[0]);
}
const postAll = async (req, res, next) => {
    
    const frases = await pool.query(sql.getAllFrase);
    if(frases.rowCount === 241) {
        res.status(201).send('Requisição recebida com sucesso!');
        console.log("Entrou aqui")
        return;
    }

    await pool.query(sql.insertFrase);
    res.status(201).send('Requisição recebida com sucesso!');
};

const updateFrase = async (req,res,next)=>{
    const { id } = req.params;
    const { frase } = req.body
    const result = await pool.query(sql.updateFrase, [frase, id]);
    res.status(200).json(result.rows[0]);
}

const deleteFrase = async (req, res, next) => {
    const { id } = req.params;
    const result = await pool.query(sql.deleteFrase, [id]);
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

module.exports = {
    getAll,
    getByID,
    postAll,
    updateFrase,
    deleteFrase,
}