const mongoose = require("mongoose");
const TodoService = require("../services/ToDo.services.js");

const todoService = new TodoService();

const estaVazio = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

class ToDoController {
  pegaTudo = async (req, res) => {
    if (estaVazio(req.body)) {
      const todo = await todoService.procuraTudo();
      res.status(200).send(todo);
    } else {
      res
        .status(406)
        .send("Não é necessário passar algo no corpo da requisição");
    }
  };

  pegaTodoPorId = async (req, res) => {
    const id = req.params.id;
    if (id.length != 24) {
      res.status(400).send("id incorreto");
      console.log("Id incorreto");
    } else {
      const todo = await todoService.procuraTodoPorId(id);
      res.status(200).send(todo);
    }
  };

  criaTodo = async (req, res) => {
    const obj = req.body;

    if (estaVazio(obj)) {
      res.status(400).send("O corpo da requisição está vazio");
    } else {
      await todoService
        .adicionaTodo(obj)
        .then(() => {
          res.status(201).send({
            message: "ToDo criada com sucesso!",
          });
        })
        .catch((err) => {
          res.status(400).send({ err: "Algo deu errado" });
        });
    }
  };

  atualizaTodo = async (req, res) => {
    const id = req.params.id;
    const obj = req.body;

    if (id.length != 24 || estaVazio(obj)) {
      res.status(400).send("Id incorreto ou o corpo da requisição está vazio");
    } else {
      await todoService.atualizaTodo(id, obj).then(() => {
        res.status(200).send({
          message: "ToDo atualizada com sucesso!",
        });
      });
    }
  };

  apagaTodo = async (req, res) => {
    const id = req.params.id;

    if (id.length != 24) {
      res.status(400).send("Id incorreto!");
    } else {
      await todoService
        .apagaTodo(id)
        .then(() => {
          res.status(200).send({
            message: "ToDo excluida com sucesso",
          });
        })
        .catch((err) => {
          res.status(401).send({
            err: err,
            message: "Algo deu errado na exclusão",
          });
        });
    }
  };
}

module.exports = ToDoController;
