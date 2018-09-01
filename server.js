var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('public'));



app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/public/pages/contact.html');
  });
  
app.get('/products', function(req, res) {
    res.sendFile(__dirname + '/public/pages/products.html');
  });

app.listen(5000,function () {
  console.log('Running server on ' + 5000);
});
