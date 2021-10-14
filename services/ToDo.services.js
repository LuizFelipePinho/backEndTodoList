const ToDoModel = require("../models/modeloToDo.js");

class TodoService {
  procuraTudo = async () => await ToDoModel.find();

  procuraTodoPorId = async (id) => await ToDoModel.findOne({ _id: id });

  adicionaTodo = async (obj) => await ToDoModel.create(obj);

  atualizaTodo = async (id, obj) => await ToDoModel.updateOne({ _id: id }, obj);

  apagaTodo = async (id) => await ToDoModel.deleteOne({ _id: id });
}

module.exports = TodoService;
