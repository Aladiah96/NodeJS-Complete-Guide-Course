const http = require('http');

http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello!!!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="newUser" placeholder="Username">');
        res.write('<button type="submit">Send</button>');
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
        req.on('data', name => {
            body.push(name);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log('user' + user);
        });
    }
    
}).listen(3000);
