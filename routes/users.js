const express = require("express");
const router = express.Router();
const userDao = require("../dao/userDao");

router.get("/addUser", (req, res) => {
  userDao.add(req, res);
});

module.exports = router;
