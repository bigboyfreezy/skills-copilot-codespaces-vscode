// Create web server
var express = require('express');
var app = express();
// Create server
var server = require('http').createServer(app);
// Create socket
var io = require('socket.io').listen(server);
// Create array to store comments
var comments = [];
// Set static folder
app.use(express.static(__dirname + '/public'));
// Listen to port 3000
server.listen(3000);
// Connect to socket
io.sockets.on('connection', function(socket) {
	// Send comments to client
	socket.emit('load comments', comments);
	// Add comment
	socket.on('add comment', function(data) {
		// Push comment to array
		comments.push(data);
		// Send comment to all clients
		io.sockets.emit('add comment', data);
	});
});