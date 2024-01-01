import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import '../../styles.css';
import 'xterm/css/xterm.css';
import io from 'socket.io-client';
import { FitAddon } from 'xterm-addon-fit';

class TerminalComponent extends Component {
  componentDidMount() {
    // Instantiate the terminal object
    this.terminal = new Terminal({
      cursorBlink: true,
      // Add any additional options you need here
    });

    // Instantiate the fit addon
    this.fitAddon = new FitAddon();
    this.terminal.loadAddon(this.fitAddon);

    // Attach the terminal to the DOM element
    this.terminal.open(this.terminalRef);
    this.fitAddon.fit(); // Fits the terminal to the size of the container

    // Set up the socket.io connection to the server-side terminal
    this.setupSocket();
  }

  setupSocket() {
    // connect to the socket.io server
    this.socket = io('http://localhost:3000');

    // Listen for data from the server and write it to the terminal
    this.socket.on('terminal-output', (data) => {
      this.terminal.write(data);
    });

    // Send data from the terminal to the server
    this.terminal.onData((data) => {
      this.socket.emit('terminal-input', data);
    });
  }

  componentWillUnmount() {
    // Clean up the terminal and socket connection
    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.terminal) {
      this.terminal.dispose();
    }
  }

  render() {
    // Here you can add any additional classes or structure needed
    return (
      <div className="terminal terminal__component">
        <div ref={ref => (this.terminalRef = ref)} className="terminal__wrapper"></div>
      </div>
    );
  }
}

export default TerminalComponent;