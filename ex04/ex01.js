var http = require('http');

var port = 9090;
var server = http.createServer(function(req, res) { //HTTP 서버 객체 생성 
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end('<h1>Hello World</h1>');
});

server.listen(port, function() {
    console.log("server: starts...[" + port + "]");
})