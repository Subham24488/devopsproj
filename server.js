'use strict';

const express = require('express');

// Constants
const PORT = 8088;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Your nodejs project is running,ENJOY!!!!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
