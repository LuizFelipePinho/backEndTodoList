const express = require("express");
const router = express.Router();
// const ToDoModel = require("../models/modeloToDo.js");
const ToDoController = require("../controllers/ToDo.controller.js");
const todoController = new ToDoController();

router.get("/", todoController.pegaTudo);

router.get("/:id", todoController.pegaTodoPorId);

router.post("/add", todoController.criaTodo);

router.put("/:id", todoController.atualizaTodo);

router.delete("/:id", todoController.apagaTodo);

module.exports = router;
