// Importaciones
import express from "express";
import { conn } from "./bd.js";
import { PORT } from "./config.js";
const app = express();
const port = PORT;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/read", async (req, res) => {
    const [result] = await conn.query(`SELECT * FROM codigo;`);
    console.log(result);
    res.json(result);
});

app.get("/create", async (req, res) => {
    const row = await conn.query(
        `INSERT INTO codigo(cod_name, cod_numLines, cod_lenguaje) VALUES("Hola Mundo!", 1, "Python");`
    );
    res.json(row);
});

app.get("/delete", async (req, res) => {
    const result = await conn.query(`DELETE FROM codigo WHERE cod_id=2;`);
    res.json(result);
});

app.get("/update", async (req, res) => {
    const result = await conn.query(
        `UPDATE codigo SET cod_name="Hello World!" WHERE cod_id=1`
    );
    res.json(result);
});

app.listen(port);
console.log(`Server on port ${port}`);
