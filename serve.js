var express = require('express');
const { type } = require('os');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
app.use(express.json());
let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address.port;
    console.log("My Frist Node Server");
    console.log("Server is listening " + host + " Port: " + port);
});

app.get('/account', function (req, res) {
    let filepath = __dirname + '/www/account.html';
    res.sendFile(filepath);
});

app.get('/', function(req,res){
    let filepath = __dirname + '/www/form.html';
    res.sendFile(filepath);
});

app.post('/api/dataform', function(req, res) {
    let response = {};
    // Check if the request body is empty
    if (!req.body) {
        console.log('No data provided in the request');
        return res.sendStatus(400); // Bad request
    }
    // Check if 'data' is a string

    var users = [
        {
        "email" : "test@com.au",
        "password" : "123"
        },
        {
        "email" : "hello@com.au",
        "password" : "321"
        },
        {
        "email" : "world@com.au",
        "password" : "432"
        }
    ];

    for(let i=0; i<users.length;i++){

        if(users[i].email == req.body.email && users[i].password == req.body.password){
            response.valid = true;
        break;
        }
        response.valid = false;
        //return res.sendStatus(400); // Bad request
    }
    return res.json(response);
});