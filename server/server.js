var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/Todos',(req,res) => {
   var Ntodo = new Todo({
       text: req.body.text
   });
   Ntodo.save().then((doc) => {
       res.send(doc);
   },(e) => {
       res.status(400).send(e);
   });
});

app.listen(3000,() => {
    console.log('Successfully connected to the port 3000');
});