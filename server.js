// Realiza a importacao das dependencias que será usada no arquivo
import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

// Usando o arquivo config.env
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

// Inicia o servidor
const server = express();
server.listen(
  PORT,
  console.log(`Open ${process.env.NODE_ENV} server. Port: ${PORT}!`),
);

// Cria as rotas do servidor
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(router);
