import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.get("/test", (req, res) => {
    return res.send('Olá NLW Together')
})

app.post("/test-post", (req, res) => {
    return res.send("Olá NLW Together - Mission: Node")
})

app.listen(3333, () => console.log("Server is running on NLW"));
