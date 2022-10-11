import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const login = express.Router();

login.post("/", async (req, res) => {
    const { email, password } = req.body;

    // 1 - Pesquisar usuario no dataBase;
    const registeredUser = await User.findOne({ where: { email } }).catch(
        (err) => { console.log(`Error: ${err}`); });

    // 2 - Usuario invalido/inexistente dataBase, informar usuario;
    if (!registeredUser) {
        return res
            .status(400)
            .json({ message: "E-mail/Senha Invalida!" })
    }

    // 3 - Validar Password;
    // 3.1 - Caso password invalido, informar usuario;
    if (!bcrypt.compareSync(password, registeredUser.password)) {
        return res
            .status(400)
            .json({ message: "Email/Senha Invalida!" })
    }

    // 3.2 - Caso password valida, gerar token;
    const token = Jwt.sign(
        {
            id: registeredUser.id,
            email: registeredUser.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    // 3.3 - Enviar token ao usuario;
    res.json({ message: "Bem-vindo!", token: token })

})

export default login;