const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.Server(app);

// Middleware
app.use(express.static(__dirname + '/www'));
app.use(express.json());

// Register routes
require('./routes/homeroute').route(app, path);
require('./routes/accountroute').route(app, path);

// API endpoint
app.post('/api/dataform', function(req, res) {
    let response = {};
    if (!req.body) {
        console.log('No data provided in the request');
        return res.sendStatus(400);
    }

    const users = [
        { email: "test@com.au", password: "123" },
        { email: "hello@com.au", password: "321" },
        { email: "world@com.au", password: "432" }
    ];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email && users[i].password === req.body.password) {
            response.valid = true;
            break;
        }
        response.valid = false;
    }

    return res.json(response);
});

// Start server
server.listen(3000, () => {
    console.log("My First Node Server");
    console.log("Server is listening on http://localhost:3000");
});
