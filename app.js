var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// var logger = function(req, res, next){
//     console.log("logging...");
//     next();
//
// }
//
// app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req,res){
    res.send("Hello world");
})
app.listen(5000, function(){
    console.log("server started on port 5000");
})
