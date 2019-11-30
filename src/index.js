var express = require('express');

var app = express();

require('./routes.js')(app);

app.listen(3000);
console.log("Jammin\' on port 3000...");


