const http = require('http');
const routes = require('./routes');

// node.js will always call the createServer whenever a request reach the server
// the createServer method returns a server. So it needs to be stored
const server = http.createServer(routes);

// listen starts a process where where nodeJS will keep listening for incoming reqs.
server.listen(3000);
