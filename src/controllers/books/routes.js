const express = require("express");
const router = express.Router();

const createBook = require("./create.bookController");
const getBook = require("./get.bookController");
const updateBook = require("./update.bookController");
const deleteBook = require("./delete.bookController");

router.get("/", getBook.service);
router.get("/:id", getBook.service);
router.post("/", createBook.service);
router.put("/:id", updateBook.service);
router.delete("/:id", deleteBook.service);

module.exports = router;
