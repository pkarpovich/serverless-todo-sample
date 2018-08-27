const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const apiController = require("./controllers/api")(db);

const app = express();

app.use(bodyParser.json());
app.use("/api", apiController);

exports.app = functions.https.onRequest(app);
