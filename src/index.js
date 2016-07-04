var qr = require('qr-image');
var https = require('https');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image(new Date().toString(), { type: 'svg' });
  res.type('svg');
  code.pipe(res);
  //res.write(code);
});

https.createServer({
      key: fs.readFileSync('./config/key.pem'),
      cert: fs.readFileSync('./config/cert.pem')
    }, app).listen(3000);
