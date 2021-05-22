const router = require("express").Router();
const User = require("../models/User.js");
router.post("/", async (req, res) => {
  console.log(req.body);
  const filter = { _id: req.body._id };
  const update = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    country: req.body.country,
  };
  let doc = await User.findOneAndUpdate(filter, update);
  res.status(200).send({ Success: doc });
});
module.exports = router;
