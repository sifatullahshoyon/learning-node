const http = require('http');
const fs = require('fs');

// creating a server using raw node.js

const server = http.createServer();


// listener
server.on('request' , (req,res) => {
    // console.log(req);
    if(req.url === '/read-file' && req.method === 'GET');

    // streaming file reading

    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt');

    readableStream.on('data' , (buffer) => {res.write(buffer)});

    readableStream.on('end' , () => {

        res.end('Hello from world');
    });

});

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
});