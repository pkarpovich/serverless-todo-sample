const { Router } = require("express");
const functionHelpers = require("firebase-functions-helper");

const collectionName = "todos";

module.exports = db => {
  const router = Router();

  router.get("/", (req, resp) => {
    functionHelpers.firestore
      .backup(db, collectionName)
      .then(todos => resp.status(200).send(todos))
      .catch(err => resp.status(500).send(err));
  });

  router.post("/", (req, resp) => {
    const { body } = req;

    functionHelpers.firestore.creatNewDocument(db, collectionName, body);

    resp.send({ success: true });
  });

  return router;
};
