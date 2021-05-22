const router = require("express").Router();
const User = require("../models/User.js");
router.get("/", async (req, res) => {
  const response = await User.find({});
  console.log(response);
  res.status(200).send({ Success: response });
});
module.exports = router;
