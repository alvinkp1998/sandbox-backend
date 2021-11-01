const express = require("express");
const router = express.Router();

const createTypeBook = require("./create.typeBookController");

router.post("/", createTypeBook.service);

module.exports = router;
