const router = require("express").Router();
const User = require("../models/User.js");
router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };
  let doc = await User.deleteOne(filter);
  res.status(200).send({ Success: doc });
});
module.exports = router;
