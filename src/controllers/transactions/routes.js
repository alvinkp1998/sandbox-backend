const express = require("express");
const router = express.Router();

const createTransaction = require("./create.transactionController");

router.post("/", createTransaction.service);

module.exports = router;
