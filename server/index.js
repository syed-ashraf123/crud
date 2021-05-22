const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
//DB URL||URI
const CONNECTION_URL =
  "mongodb+srv://youtube:Z@no72754@cluster0.nagym.mongodb.net/YoutubeTutorial?retryWrites=true&w=majority";

//Connection Part
mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connected to Database")
);

//Routers
const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deletes = require("./router/delete.js");

//API
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);

app.listen(5000, () => console.log("Running on port 5000"));
