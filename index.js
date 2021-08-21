const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>Code Step by step</h1>");
resp.end();
}).listen(4500);
