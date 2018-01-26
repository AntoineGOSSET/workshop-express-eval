var http = require ("http");

const app = http.createServer(function (request, response) {
    response.writeHead(200, {
       'Content-Type': 'text/plain'
    });
    response.write('Hello World')
    response.end();
})

module.exports = app;