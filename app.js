var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.get('/',function(req,res){
    res.send("Hello world");
})




app.listen(5000, function(){
    console.log("server started on port 5000");
})
