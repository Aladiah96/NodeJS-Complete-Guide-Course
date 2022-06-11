const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, 'views/main.html'));
});

app.listen(3000);
