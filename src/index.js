var express = require('express');

var app = express();

var app = express();app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  require('./routes.js')(app);

app.listen(3000);
console.log("Jammin\' on port 3000...");


