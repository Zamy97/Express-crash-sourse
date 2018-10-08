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

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path

app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        first_name: "Aktar",
        last_name: "Zaman",
        email: "Auz.zamy@gmail.com",
    },
    {
        id: 2,
        first_name: "Fariha",
        last_name: "Zaman",
        email: "FarihaZaman@gmail.com"

    },
    {
        id: 3,
        first_name: "Rahima",
        last_name: "Mahmood",
        email: "mhmd.rahima@gmail.com",
    }
]



app.get('/',function(req,res){
    res.render('index', {
        title: 'Customers',
        users: 'users'
    });
});
app.listen(5000, function(){
    console.log("server started on port 5000");
})
