const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Data = require("./data.js");

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

//get all pie data
app.get("/api/pie/data", (req, res) => {
  res.json(Data.getPieData());
});

//get all graph data
app.get("/api/graph/data", (req, res) => {
  res.json(Data.getGraphData());
});

//get specific data with id
app.get("/api/graph/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = Data.getSelectedData(id);

  res.send(data);
});

app.all("/api*", (req, res) => {
  res.status(404);
  res.send();
});

app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "index.html"));
});

module.exports = app;
