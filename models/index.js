const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookArr = new Schema({
    name: String
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [bookArr],
        required: true,
        default: undefined
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;