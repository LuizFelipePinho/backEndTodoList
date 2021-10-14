const mongoose = require("mongoose");
const ToDoModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: String, required: true },
  dataDeCriacao: { type: Date, default: Date.now },
});

const todoModel = mongoose.model("toDoList", ToDoModel);

module.exports = todoModel;
