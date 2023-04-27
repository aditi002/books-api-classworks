const mongoose = require("mongoose")
const reviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
        minLength: 10
    }
})

const bookSchema = new mongoose.Schema({
    title:{     
        type: String,
        required : true
    },
    author:{
        type:String,
        default:"Annonymous"  
    },
    reviews:['reviewSchema0'] //embedded reviews in book.
},{timestamps: true})

module.exports = mongoose.model('Book', bookSchema)