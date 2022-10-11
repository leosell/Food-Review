import express from "express";

const review = express.Router();

review.get("/", (req, res) => {
    res.send("Review Routes")
})

export default review;