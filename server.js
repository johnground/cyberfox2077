const express = require('express');
const cors = require('cors');
const { spawn } = require('node-pty');
const os = require('os');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const path = require('path');
const { exec } = require('child_process');

// Enable CORS for all routes
app.use(cors());

// Serve static files from /home/cyberfox
app.use(express.static('/home/cyberfox'));

// Initialize Socket.IO server with CORS options
const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

// Utility function for command validation (update as needed)
function isValidCommand(command) {
    // Define a list of valid commands or a validation logic
    const validCommands = ['load ollama model']; // Example
    return validCommands.includes(command);
}

// Utility function for command sanitization (update as needed)
function sanitizeCommand(command) {
    // Implement sanitization logic here
    return command; // Placeholder
}

// Function to execute commands in ollama container
function executeOllamaCommand(command, callback) {
    // Sanitize and validate command here
    const sanitizedCommand = sanitizeCommand(command);

    // Execute command in ollama container
    const ollamaCommand = `docker exec ollama ${sanitizedCommand}`;
    exec(ollamaCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution error: ${error}`);
            return callback(`Error: ${error}`);
        }
        callback(`Output: ${stdout}\nErrors: ${stderr}`);
    });
}

io.on('connection', (socket) => {
    console.log('a user connected');

    // Initialize node-pty with a shell upon new socket connection
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
    const ptyProcess = spawn(shell, [], {
        name: 'xterm-color',
        cwd: process.env.PWD, 
        env: process.env
    });

    // When the front-end sends a command, write it to the ptyProcess
    socket.on('terminal-input', (input) => {
        const trimmedInput = input.trim();
        if (isValidCommand(trimmedInput)) {
            executeOllamaCommand(trimmedInput, (output) => {
                socket.emit('terminal-output', output);
            });
        } else {
            ptyProcess.write(input);
        }
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

// Add a catch-all route to serve index.html for non-API requests
app.get('*', (req, res) => {
    res.sendFile(path.join('/home/cyberfox', 'index.html'));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
