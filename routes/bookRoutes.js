const express = require("express");
const router = express.Router();
const { reserveBooks, deleteBook } = require("../controllers/bookController");

router.post("/books/reserve", reserveBooks);
router.delete("/books/:id", deleteBook);

module.exports = router;
