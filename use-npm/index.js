console.log('Starting index.js');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) =>{
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
});

server.listen('3000');
console.log('Listening on port 3000...');
