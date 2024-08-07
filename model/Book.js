const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema({
    bookname:{type: 'string', required: true},
    author:{type: 'string', required: true},
    publicationYear:{type: 'number', required: true},

    numberOfPages:{type: 'number', required: true},
},{
    timestamps: true,
})

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};