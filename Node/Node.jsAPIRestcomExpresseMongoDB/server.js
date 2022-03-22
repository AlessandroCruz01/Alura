const http = require('http');//modo nativo
const port = 3000;

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Livros',
    '/autores': 'Autores',
    '/teste': '<h1>teste</h1>'
}


const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor escutando no localhost:${port}`)
})