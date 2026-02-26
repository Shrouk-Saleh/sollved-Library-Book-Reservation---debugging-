const Book = require("../models/Book");

const reserveBooks = async (req, res) => {
  try {
    const { bookIds } = req.body;
    if (!bookIds || !Array.isArray(bookIds) || bookIds.length === 0) {
      return res.status(400).json({ msg: "bookIds must be a non-empty array" });
    }

    let reservedCount = 0;
    for (const id of bookIds) {
      const book = await Book.findById(id);

      if (!book) continue;

      if (!book.isAvailable) continue;

      book.isAvailable = false;
      await book.save();

      reservedCount++;
    }

    res.status(200).json({
      msg: "Books reserved successfully",
      count: reservedCount,
    });

  } catch (error) {
    console.error("Reserve Books Error:", error);
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json({ msg: "Book deleted successfully" });

  } catch (error) {
    console.error("Delete Book Error:", error);
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = { reserveBooks, deleteBook };