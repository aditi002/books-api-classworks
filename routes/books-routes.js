const express = require('express')
const Book = require('../models/Book')
const bookController = require('../controllers/book-controller')
const reviewController = require ('../controllers/review-controller')
const router = express.Router()


router.route('/')
    .get(bookController.getAllBooks)
    .post(bookController.createBook)
    .put((req,res) =>{
        res.status(405).json({error: "PUT request is not allowed"})
    })
    .delete(bookController.deleteAllBooks)  

    router.route('/:book_id')
    .get(bookController.getBookByID)
    .post((req, res,next) =>{
        res.status(405).json({error: "POST request is not allowed"})
    })
    .put(bookController.updateBookByID)
    .delete(bookController.deletebookByID)

    router.route('/:book_id/reviews')
    .get(reviewController.getAllReview)
    .post(reviewController.createAllReview)
    .put((req,res) =>{
        res.status(405).json({error: "PUT request is not allowed"})
    })
    .delete(reviewController.deleteAllReview)

    router.route('/:book_id/reviews/:reviews_id')
    .get(reviewController.getReviewByID)
    .put(reviewController.updateReviewByID)
    .delete(reviewController.deleteReviewByID)


module.exports = router
                                                                                                                                             