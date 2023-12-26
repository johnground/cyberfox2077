const express = require('express');
const { exec } = require('child_process');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Serve static files from the root directory
app.use(express.static('.'));

io.on('connection', (socket) => {
    socket.on('terminal-input', (input) => {
        processData(input, (output) => {
            socket.emit('terminal-output', output);
        });
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const projectsPath = '/home/cyberfox/projects'; // Path to the 'projects' directory

function processData(input, callback) {
    const sanitizedInput = sanitizeInput(input);

    if (sanitizedInput) {
        exec(sanitizedInput, { cwd: projectsPath }, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return callback(`Error: ${error.message}`);
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return callback(stderr);
            }
            callback(stdout);
        });
    } else {
        callback('Invalid command');
    }
}

function sanitizeInput(input) {
    // Implement your command sanitization logic here
    if (input.startsWith('git') && !input.includes('&&') && !input.includes(';')) {
        return input;
    }
    return null;
}
