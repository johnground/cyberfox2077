const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Serve static files from the root directory
app.use(express.static('.')); // '.' refers to the current directory

io.on('connection', (socket) => {
    socket.on('terminal-input', (data) => {
        // Handle terminal data
        socket.emit('terminal-output', processData(data));
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

function processData(data) {
    // Process the data received from terminal
    // Return the processed data
    return data; // Placeholder: Replace with actual logic
}
