

const mongoose = require('mongoose')

 const bookSchema = new mongoose.Schema({

title:{type: String, required: true},
img:{type: String, required: true},
price:{type: String, required: true},
stock:{type: Number, required: true},
// readyToEat: Boolean

 })

 const Book = mongoose.model('Book', bookSchema)



module.exports = Book

