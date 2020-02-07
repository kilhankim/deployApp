var request = require('request');

const express = require('express');

var app = express();

app.get('/', (req, res) => {

  res.send('hello world');

});

app.listen(80, () => {
    console.log('Server is running at port 80');
});
