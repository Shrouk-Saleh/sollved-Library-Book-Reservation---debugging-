const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },

},{ timestamps: true });

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;