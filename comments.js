// create web server with express
// to run: node comments.js

var express = require('express');
var app = express();
var fs = require("fs");

// get comments
app.get('/listComments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// add comments
var comments = {
   "comment4" : {
      "comment" : "This is comment 4",
      "name" : "Tom",
      "time" : "2017-04-09"
   }
}

app.get('/addComment', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment4"] = comments["comment4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// delete comments
app.get('/deleteComment', function (req, res) {

   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment" + 2];

       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// get comments
app.get('/:id', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       comments = JSON.parse( data );
       var comment = comments["comment" + req.params.id]
       console.log( comment );
       res.end( JSON.stringify(comment));
   });
})

// create server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

// print server info
  console.log("Example app listening at http://%s:%s", host, port)
})


