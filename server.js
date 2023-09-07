const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 5500;

const requests = function(req, res){
    fs.readFile(__dirname, './Drawing/drawing.html')
    res.statusCode = 200;
}

const server = http.createServer(requests);
server.listen(port, host, () => {
    console.log(`server is running http://${host}:${port}`)
});