const express = require("express");
const app = express();
const cors = require("cors");
const Connection = require("./connection/conn.js");
app.use(express.json());
app.use(cors());
Connection();

const rotaToDoList = require("./routes/rotas.js");

app.use("/todo", rotaToDoList);

const port = 3000;

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));
