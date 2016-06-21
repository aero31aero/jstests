var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image(new Date().toString(), { type: 'svg' });
  res.type('svg');
  code.pipe(res);
  //res.write(code);
});

app.listen(3000);
