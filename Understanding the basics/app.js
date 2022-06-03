const http = require('http');
const express = require('express');
const app = express();

app.use('/', (req,res,next) => {
   console.log('This always runs');
   next();
});

app.use('/add-product', (req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>The "add product" Page</h1>')
});

app.use('/', (req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from express.</h1>')
});

// node.js will always call the createServer whenever a request reach the server
// the createServer method returns a server. So it needs to be stored
const server = http.createServer(app);

// listen starts a process where where nodeJS will keep listening for incoming reqs.
server.listen(3000);
