var express = require('express');
var browserkthx = require('../');

var app = express();

// setup what browsers we don't allow
app.use(browserkthx({
    firefox: '< 10',
    chrome: '< 10',
    ie: '< 9'
}));

app.get('/', function(req, res) {
    res.send('welcome modern web traveler!');
});

app.listen(3000);
