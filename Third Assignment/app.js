const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req,res,next) => {
    console.log('Second route');
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
});

app.use('/', (req,res,next) => {
    console.log('First route');
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
});

app.listen(3000);
