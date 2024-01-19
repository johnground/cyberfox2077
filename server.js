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
const fs = require('fs');

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

// Utility function for command validation
function isValidCommand(command) {
    const validCommands = ['load ollama model'];
    return validCommands.includes(command);
}

// Utility function for command sanitization
function sanitizeCommand(command) {
    return command;
}

// Function to execute commands in ollama container
function executeOllamaCommand(command, callback) {
    const sanitizedCommand = sanitizeCommand(command);
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
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
    const ptyProcess = spawn(shell, [], {
        name: 'xterm-color',
        cwd: process.env.PWD, 
        env: process.env
    });

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

    ptyProcess.on('data', function(data) {
        socket.emit('terminal-output', data);
    });

    socket.on('disconnect', () => {
        ptyProcess.kill();
        console.log('user disconnected');
    });
});

// Route for serving README.md
app.get('/api/readme', (req, res) => {
    fs.readFile(path.join(__dirname, 'README.md'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading README.md:', err);
            return res.status(500).send('Unable to read README.md');
        }
        res.type('text/plain').send(data);
    });
});

// Route for serving README.md for Module 6
app.get('/api/module6-readme', (req, res) => {
    fs.readFile(path.join(__dirname, 'Module6-README.md'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading Module6-README.md:', err);
            return res.status(500).send('Unable to read Module6-README.md');
        }
        res.type('text/plain').send(data);
    });
});
// Catch-all route to serve index.html for non-API requests
app.get('*', (req, res) => {
    res.sendFile(path.join('/home/cyberfox', 'index.html'));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
