var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));

var port = process.env.PORT || 5000;
//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies


app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/public/pages/contact.html');
  });

app.post('/contact', function(req, res) {
   res.send(req.body)


  });
  
app.get('/products', function(req, res) {
    res.sendFile(__dirname + '/public/pages/products.html');
  });

app.listen(port,function () {
  console.log('Running server on ' + port);
});
