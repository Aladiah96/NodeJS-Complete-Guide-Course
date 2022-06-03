const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

// node.js will always call the createServer whenever a request reach the server
// the createServer method returns a server. So it needs to be stored
const server = http.createServer(app);

// listen starts a process where where nodeJS will keep listening for incoming reqs.
server.listen(3000);
