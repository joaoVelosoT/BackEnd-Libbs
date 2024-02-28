// Criar um servidor http
// Carregar o http
const http = require("http");

// Criar o servidor 
const server = http.createServer((req, res) => {
    //req => as requisições recebidas do mundo la fora

    console.log(req.url);
    // /save  /students /delete

    if(req.url === '/save') {
        console.log(req.method);
        res.end("Salvando usuarios")
    }else if(req.url === '/students') {
        console.log("Lista de todos os users");
        res.end("Listando usuarios")
    }else if(req.url === '/delete') {
        console.log("apagando user");
        res.end("Deletando usuario")
    }else {
        console.log("nao conheco essa rota");
    }



})

// Subir o servidor

server.listen(3000, () => {
    console.log("Server ok");
});