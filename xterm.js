// TerminalComponent.js
import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

class TerminalComponent extends Component {
  componentDidMount() {
    // Instantiate the terminal object
    this.terminal = new Terminal({
      cursorBlink: true
    });

    // Attach the terminal to the DOM element
    this.terminal.open(this.terminalRef);

    // Set up the WebSocket connection to the server-side terminal
    this.setupWebSocket();
  }

  setupWebSocket() {
    // Create a WebSocket connection to the server-side process
    // Note: Replace `ws://backend` with your actual backend WebSocket endpoint
    this.socket = new WebSocket('ws://backend');

    // Listen for data from the WebSocket and write it to the terminal
    this.socket.onmessage = event => {
      this.terminal.write(event.data);
    };

    // Send data from the terminal to the WebSocket
    this.terminal.onData(data => {
      this.socket.send(data);
    });
  }

  componentWillUnmount() {
    // Clean up the terminal and WebSocket connection
    if (this.socket) {
      this.socket.close();
    }
    if (this.terminal) {
      this.terminal.dispose();
    }
  }

  render() {
    return (
      <div className="terminal-wrapper">
        <div ref={ref => (this.terminalRef = ref)}></div>
      </div>
    );
  }
}

export default TerminalComponent;
