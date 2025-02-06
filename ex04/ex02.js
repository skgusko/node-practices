var http = require('http');
var fs = require('fs');

var port = 9090;
var server = http.createServer(function(req, res) { //HTTP 서버 객체 생성 
    
    if (req.url === '/') {
        req.url = '/index.html';
    }

    fs.readFile(__dirname + '/public' + req.url, function(error, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
    
    
});

server.listen(port, function() {
    console.log("server: starts...[" + port + "]");
})