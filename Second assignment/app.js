const express = require('express');
const app = express();

app.use('/users', (req,res,next) => {
    console.log('Second route');
    res.send('<h1>Hello from the user page.</h1>');
});

app.use('/', (req,res,next) => {
    console.log('First route');
    res.send('<h1>Hello from express!</h1>')
});

app.listen(3000);
