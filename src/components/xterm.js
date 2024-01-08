import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import '/styles/styles.css';
import '/styles/xterm.css';
import io from 'socket.io-client';
import { FitAddon } from 'xterm-addon-fit';

class TerminalComponent extends Component {
  componentDidMount() {
    this.terminal = new Terminal({
      cursorBlink: true,
    });

    this.fitAddon = new FitAddon();
    this.terminal.loadAddon(this.fitAddon);
    this.terminal.open(this.terminalRef);
    this.fitAddon.fit(); 


    this.setupSocket();
  }

  setupSocket() {
    this.socket = io('http://localhost:3000');

    this.socket.on('terminal-output', (data) => {
      this.terminal.write(data);
    });

    this.terminal.onData((data) => {
      this.socket.emit('terminal-input', data);
    });
  }

  componentWillUnmount() {

    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.terminal) {
      this.terminal.dispose();
    }
  }

  render() {

    return (
      <div className="terminal terminal__component">
        <div ref={ref => (this.terminalRef = ref)} className="terminal__wrapper"></div>
      </div>
    );
  }
}

export default TerminalComponent;