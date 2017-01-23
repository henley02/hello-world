var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get("/", function (req, res) {
    res.render('index', {msg: 'Welcome to the Practical Node.js!'});
})
app.get('/if', function (req, res) {
    res.render("if");
})
app.get('/each', function (req, res) {
    res.render("each")
})
app.get('/case', function (req, res) {
    res.render('case');
})
app.get("/mixin", function (req, res) {
    res.render("mixin")
})
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express.js server listening on port ' + app.get('port'))
})