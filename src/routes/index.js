const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/users/routes");
const bookRoutes = require("../controllers/books/routes");
const transactionRoutes = require("../controllers/transactions/routes");
const typeBookRoutes = require("../controllers/typeBooks/routes");

router.use("/user", userRoutes);
router.use("/transaction", transactionRoutes);
router.use("/book", bookRoutes);
router.use("/book/type", typeBookRoutes);

module.exports = router;
