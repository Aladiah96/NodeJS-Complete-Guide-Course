const http = require('http');

http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello!!!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" placeholder="Username"></input>');
        res.write('<button name="Send" value="send">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
    } else if(url === '/user') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>Levan</li></ul>');
        res.write('<ul><li>Devon</li></ul>');
        res.write('<ul><li>Gasparini</li></ul>');
        res.write('</body>');
        res.write('</html>');
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (name) => {
            body.push(name);
        })
        const parsedBody = Buffer.concat(body).toString();
        const user = parsedBody.split('=')[1];
        console.log(user);
    }
    
}).listen(3000);

// Spin up a node.js-driven server (on port 3000)

// Handle two routes: "/" and "/user"
// Return some greeting text on "/"
// Return a list of dummy users(e.g<ul><li>User 1</li></ul>)

//Add a form with a "username" <input> to the "/" page and submit a
// POST request to "/create-user" upon a button click

// Add the "/create-user" route and parse the incoming data
// and simply log it to the console.