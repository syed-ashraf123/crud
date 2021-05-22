const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
//DB URL
const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/CRUDAPP?retryWrites=true&w=majority";

//Connection to DB
mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to DB");
  }
);

const userCreate = require("./routes/create.js");
const getUser = require("./routes/get.js");
const updateUser = require("./routes/update.js");
const deleteUser = require("./routes/delete.js");

app.use("/", getUser);
app.use("/create", userCreate);
app.use("/update", updateUser);
app.use("/delete", deleteUser);

app.listen(5000, () => console.log("Server Runnning"));
