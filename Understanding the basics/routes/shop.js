const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../helpers/path');

router.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, rootDir, 'views', 'shop.html'));
});

module.exports = router;