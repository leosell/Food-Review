import express from "express";

const restaurant = express.Router();

restaurant.get("/", (req, res) => {
    res.send("Restaurant's Routes")
});

export default restaurant;