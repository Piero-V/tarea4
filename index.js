var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos',c_productos)

function c_inicio(req, res) {
    res.send('<h1>Inicio</h1>');
}

function c_clientes(req, res) {
    res.send('<h1>Cliente</h1>');
}
function c_productos(req, res) {
    res.send('<h1>Productos</h1>');
}

function c_server(req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(5000,c_server);

