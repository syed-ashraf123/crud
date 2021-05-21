const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ name: "John", age: "54" });
});

app.get("/unverified", (req, res) => {
  res.status(400).send({ msg: "Not Verified" });
});

app.post("/", (req, res) => {
  res.status(200).send({ name: req.body.name });
});

app.post("/verify", (req, res) => {
  res.status(200).send({ token: req.headers.token });
});

app.listen(4000);
