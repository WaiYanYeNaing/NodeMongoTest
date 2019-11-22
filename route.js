const express = require('express')
const router = express.Router()
const Book = require('./model/Book')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch(err) {
        res.json({msg: err})
    }
})

router.post('/', async (req, res) => {
    const {book_name, author_name} = req.body
    try {
        const book = new Book({
            book_name,
            author_name
        })
        const new_book = await book.save()
        res.json(new_book)
    } catch(err) {
        res.json({msg: err})
    }
})

router.put('/:id', async (req, res) => {
    const {book_name, author_name} = req.body
    const updateBook = await Book.updateOne({_id: req.params.id}, {
        book_name,
        author_name,
        // $set: {
        //     book_name,
        //     author_name
        // }
    })
    res.json(updateBook)
})

router.delete('/:id', async (req, res) => {
    try{
        const removeBook = await Book.deleteOne({_id: req.params.id})
        res.json(removeBook)
    } catch(err) {
        res.json({msg: err})
    }
})

module.exports = router