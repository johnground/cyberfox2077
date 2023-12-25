// terminalModule.js
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export function initializeTerminal(containerId) {
    const terminal = new Terminal();
    terminal.open(document.getElementById(containerId));
    return terminal;
}
// terminalModule.js (continued)
import { io } from 'socket.io-client';

export function setupSocketIO(terminal) {
    const socket = io();

    // Send data to server
    terminal.onData(data => {
        socket.emit('terminal-input', data);
    });

    // Receive data from server
    socket.on('terminal-output', data => {
        terminal.write(data);
    });
}
