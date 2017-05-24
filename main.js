var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();
app.use(express.static('/app'))

app.get('/', function(request, response) {
    response.sendfile(__dirname + 'app/index.html');
}).listen(port);