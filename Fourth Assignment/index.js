const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersList = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('form');
});

app.post('/', (req, res, next) => {
  usersList.push({ name: req.body.name })
  console.log(usersList);
  res.redirect('/');
})

app.get('/users', (req, res, next) => {
  res.render('users', ({ usersList: usersList }));
})

app.listen(3000);