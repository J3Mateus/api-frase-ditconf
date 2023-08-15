const express = require("express");
const app = express();
const router = express.Router(); //Rotas
const index = require("./routes/index");
const frasesRoute = require("./routes/frasesRoute");
const { initializeTable } = require('./db/index');
var bodyParser = require('body-parser')

initializeTable(); 

app.use("/", index);
app.use(bodyParser.json())
app.use("/api", frasesRoute);

module.exports = app;
