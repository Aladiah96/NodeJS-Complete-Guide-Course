const http = require('http');
const fs = require('fs');

// node.js will always call the createServer whenever a request reach the server
// the createServer method returns a server. So it needs to be stored
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // renders the .write HTML if the url is /
    // when you send the form the URL becomes /message
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // when the url is message, it will write a file with the form response
    // and then it'll redirect back to URL /.
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        // the writefile result will come as message = input
        // because the value is input as key = value pair
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

// listen starts a process where where nodeJS will keep listening for incoming reqs.
server.listen(3000);
