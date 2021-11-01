const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/users/routes");
const bookRoutes = require("../controllers/books/routes");
const transactionRoutes = require("../controllers/transactions/routes");

router.use("/user", userRoutes);
router.use("/book", bookRoutes);
router.use("/transaction", transactionRoutes);

module.exports = router;
