/*
* Servidor HTTP e API com o express
*/

// Importar o modulo express - antes precsa instalar
//npm i express

// A ideia agora e trabalhar com aplicação fullstack 

const express = require("express");
const app = express();

//pegando um mod externo - uma view
const indexView = require("./views/indexView")


app.use(express.static("public"));


// Aqui vao as rotas (endpoints)
app.get('/student' , (req, res, next) => {
    
    res.end(indexView());

})

app.listen(3001, () => {
    
    console.log("Servidor no ar com o Express...");

});