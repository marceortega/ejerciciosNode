
var express = require('express');


var app = express();

app.all('/', function (req, res) {
  res.send("hola raton con cola");
 
});

var server = app.listen (3000, function(){
  
})
