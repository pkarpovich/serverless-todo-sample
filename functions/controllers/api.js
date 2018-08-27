const { Router } = require("express");

module.exports = db => {
  const router = Router();

  const todosController = require("./todos")(db);

  router.use("/todos", todosController);

  return router;
};
