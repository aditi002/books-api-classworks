require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')




const books_routes = require('./routes/books-routes')




const port = process.env.PORT

mongoose.connect('mongodb://127.0.0.1:27017/Books-Review')

.then(()=>{

console.log('connected to the mongodb database server')

 })

 .catch((err) => console.log(err))







const app = express() //initiate  express by giving name app




app.use(express.json()) //request pass through this





app.get('/', (req,res) =>{

 //  console.log(req)

res.send("aratiiii chaprii nibiii")




})






app.use('/api/books', books_routes )




app.listen(port,()=>{

 console.log(`server is running at port ${port}`)

})
// require('dotenv').config()
// const express=require('express')
// const mongoose= require('mongoose')
// const books_routes = require('./routes/books-routes')
// const port = process.env.PORT

// mongoose.connect('mongodb://localhost:27017/books-api')
//     .then(()=>{
//         console.log("connected to  mongodb batabase server")
// })
//     .catch((err)=> console.log(err))

// let books=require("./data/books")            //Importing data folder and  books.js, data folder bata

// const app=express()

// app.use(express.json())

// app.get('/',(req,res) => {
//     res.send("Hello Node")
// })
// app.use('/api/books',books_routes)

// app.listen(port,() => {
//     console.log(`Server is running at port ${port}`)
// })

// app.get('/',(req,res)=>{
//     console.log(req)
//     res.send("Hello Worlds")
// })



// app.get('/api/books',(req,res)=>{
//     res.json(books)
// })

// app.get('/api/books/:book_id',(req,res)=>{
//     const book_id=Number(req.params.book_id)     // Number changes string into number
//     console.log(req.params)
//    const B=books.find((b)=>b.id===req.params.id)
//    res.json(books)
// })

// app.post('/api/books',(req,res)=>{
//     if(!req.body.title){
//         return res.status(400).json({error:"Title is missing"})
//     }
//     const book={
//         id: books.length+1,
//         title: req.body.title,
//         author: req.body.author || "Anonymous"    
//     }
//     books.push(book)
//     res.status(201).json(book)
// })

// app.put("/api/books/:book_id",(req,res)=>{
//    const updated_books= books.map((b)=>{
//         if (b.id==req.params.book_id){
//             b.title=req.body.title
//             b.author=req.body.author || " Anonymous"
//         }
//         return b
//     })
//     res.json(updated_books)
// })

// app.delete("/api/books/:books_id",(req,res)=>{
//         const delete_update_books=books.filter((b)=>{
//             if (b.id!=req.params.books_id){
//                 return b
//             }
           
//         })
//         res.json(delete_update_books)
// })

// app.listen(3000,()=>{
//     console.log('Server is running at port 3000')
// })
