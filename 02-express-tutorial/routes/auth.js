const express = require("express");

const secondRouter = express.Router();

secondRouter.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

module.exports = secondRouter;

// console.log(module.exports);
