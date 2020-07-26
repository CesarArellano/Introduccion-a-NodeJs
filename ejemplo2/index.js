const express = require('express');
const server = express();
const color = require('colors');

server.get('/', (req,res) =>
{
    res.send('<h1>Hola Mundo</h1>');
});
//Funciones flecha
server.listen(3000, () =>
{
    console.log('Server on port 3000'.yellow);
});
/*  Utilizar NodeJS con Javascript puro para aplicaciones más robustas es complicado de sostener a futuro,
    es por ello que se utilizan frameworks con npm.
    NPM = Node Package Manager
    Daremos npm init
    Borramos los modulos
    Y ya en el server daremos npm install -> Leerá package.json para instalar las dependencias / módulos.
const http = require('http');
var colors = require('colors');

const handleServer = function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'}); //Código de estado 200 -> Respuesta éxitoso
    res.write('<h1>Hola mundo</h1>');
    res.end();
}
const server = http.createServer(handleServer);

server.listen(3000, function()
{
    console.log('Server on port 3000'.yellow);
});
const fs = require('fs');
// Se harán callbacks, cada vez que se utilicen métodos que no ejecute NodeJs, sino otros programas.
fs.readFile('./texto.txt',function(err,data)
{
    if(err)
        console.log(err);
    else
        console.log(data.toString());
});

fs.writeFile('./texto.txt','linea_uno', function(err) // Esto lo ejecuta el OS, no NodeJS es por ello que primero se imprimirá 'Última línea de código'
{
    if(err)
        console.log(err);
    else
        console.log('Archivo creado');
});
console.log('Última línea de código');
*/

/*
const os = require('os');

console.log(os.release());
console.log('Free mem: ',os.freemem());
console.log('Total mem: ',os.totalmem());
*/