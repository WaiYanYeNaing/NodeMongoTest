const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Book', BookSchema)