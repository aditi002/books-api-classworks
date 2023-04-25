const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    author:{
        type:String,
        default:"Annonymous"
    }
},{timestamps: true})

module.exports = mongoose.model('Book', bookSchema)