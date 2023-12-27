const express = require('express');
const { spawn } = require('node-pty'); // Import node-pty
const path = require('path');
const os = require('os');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Serve static files from the root directory
app.use(express.static('.'));

io.on('connection', (socket) => {
    console.log('a user connected');

    // Initialize node-pty with a shell upon new socket connection
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

    const ptyProcess = spawn(shell, [], {
        name: 'xterm-color',
        cwd: process.env.PWD, // or another directory you wish to set as the current working directory
        env: process.env
    });

    // When the front-end sends a command, write it to the ptyProcess
    socket.on('terminal-input', (input) => {
        ptyProcess.write(input);
    });

    // When the ptyProcess generates data, send it to the front-end
    ptyProcess.on('data', function(data) {
        socket.emit('terminal-output', data);
    });

    // Clean up the terminal process on disconnect
    socket.on('disconnect', () => {
        ptyProcess.kill();
        console.log('user disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Removed processData and sanitizeInput functions
// as we are now using node-pty to manage shell commands directly.

