import express, { response } from "express";

const app = express();
/**
 * GET      => Buscar uma informação
 * POST     => Inserir/criar uma informação
 * PUT      => Alterar una informação 
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação específica (alterar somente a senha, por exemplo)
 */
app.get("/test", (req, res) => {
    //Request  => Entrando
    //Response => Saindo
    return res.send('Olá NLW Together')
})

app.listen(3333, () => console.log("Server is running on NLW"));