import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import '/styles/styles.css';
import '/styles/xterm.css';
import io from 'socket.io-client';
import { FitAddon } from 'xterm-addon-fit';
import Resizable from './Resizable'; // Adjust the import path as needed

class TerminalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minimized: false,
            height: 250, // Default height or state variable
        };
        this.terminalRef = null;
    }

    toggleMinimize = () => {
        this.setState(prevState => ({
            minimized: !prevState.minimized,
        }), () => {
            if (!this.state.minimized) {
                this.fitAddon.fit(); // Refit if maximized
            }
        });
    };

    componentDidMount() {
        this.terminal = new Terminal({ cursorBlink: true });
        this.fitAddon = new FitAddon();
        this.terminal.loadAddon(this.fitAddon);
        this.terminal.open(this.terminalRef);
        this.fitAddon.fit();
        this.setupSocket();
    }

    setupSocket() {
        this.socket = io('http://localhost:3000');
        this.socket.on('terminal-output', data => {
            this.terminal.write(data);
        });
        this.terminal.onData(data => {
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

    handleResize = (newHeight) => {
        this.setState({ height: newHeight }, () => {
            this.fitAddon.fit(); // Refit after resize
        });
    };

    render({ }, { minimized, height }) {
        const buttonSymbol = minimized ? '⤢' : '–';
        return (
            <div className={`terminal terminal__component ${minimized ? 'minimized' : ''}`} style={{ height: `${height}px` }}>
                <button
                    onClick={this.toggleMinimize}
                    className="terminal__minimize-btn"
                >
                    {buttonSymbol}
                </button>
                <div ref={el => (this.terminalRef = el)} className="terminal__wrapper">
                    {/* Terminal content goes here */}
                </div>
                <Resizable height={height} onResize={this.handleResize} minHeight={50} />
            </div>
        );
    }
}

export default TerminalComponent;


