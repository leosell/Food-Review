import express from "express";
import Restaurant from "../models/Restaurant.js";

const restaurant = express.Router();

restaurant.get("/", (req, res) => {
    res.send("Restaurant's Routes")
});

restaurant.post("/register", async (req, res) => {
    const { name, cnpj, endereco } = req.body
    const alreadyExistsRestaurant = await Restaurant.findOne({ where: { cnpj } }).catch(
        (err) => {
            console.log(err)
        }
    )

    if (alreadyExistsRestaurant) {
        return res
            .status(409)
            .json({ message: "CNPJ já está registrado" })
    }

    const newRestaurant = new Restaurant({ name, cnpj, endereco })
    const savedRestaurant = await newRestaurant.save().catch((err) => {
        console.log(`Error ${err}`)
        res
            .status(500)
            .json({ error: 'Não foi possivel cadastrar o restaurante'})
    })

    if (savedRestaurant) res.json({ message: 'Obrigado por cadastrar o seu restaurante '})
})

export default restaurant;