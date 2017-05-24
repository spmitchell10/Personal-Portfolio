var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static('/app'))

app.get('/', function(request, response) {
    response.sendfile(__dirname + 'index.html');
});

app.listen(port,function(){
	console.log("RUNNING");
})