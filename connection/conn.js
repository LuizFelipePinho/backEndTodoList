const mongoose = require("mongoose");

const Conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/toDoList", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.log(err));
};

module.exports = Conn;
