require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const Connection = require("./connection/conn.js");
app.use(express.json());
app.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;


Connection(db_url, db_user, db_pass, db_data);

const rotaToDoList = require("./routes/rotas.js");

app.use("/todo", rotaToDoList);

const port = 3001;

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));
