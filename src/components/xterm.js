import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import '/styles/styles.css';
import '/styles/xterm.css';
import io from 'socket.io-client';
import { FitAddon } from 'xterm-addon-fit';
import Resizable from './Resizable'; // Ensure this is the correct path to your Resizable component


class TerminalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { minimized: false, height: 250 };
        this.terminalRef = null;
    }

    toggleMinimize = () => {
        this.setState(prevState => ({ minimized: !prevState.minimized }), () => {
            if (!this.state.minimized) {
                this.fitAddon.fit();
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
            this.fitAddon.fit();
        });
    };


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

    // Method to initialize the resize handle functionality
    initializeResizeHandle = () => {
        let startHeight, startY;

        const doDrag = (e) => {
            const newHeight = startHeight + (e.clientY - startY);
            this.setState({ height: Math.max(this.props.minHeight, newHeight) }, () => {
                this.fitAddon.fit();
            });
        };

        const stopDrag = () => {
            document.documentElement.removeEventListener('mousemove', doDrag);
            document.documentElement.removeEventListener('mouseup', stopDrag);
        };

        const startDrag = (e) => {
            startY = e.clientY;
            startHeight = this.state.height;
            document.documentElement.addEventListener('mousemove', doDrag);
            document.documentElement.addEventListener('mouseup', stopDrag);
        };

        this.resizeHandleRef.addEventListener('mousedown', startDrag);
    };
    render({ }, { minimized, height }) {
        const buttonSymbol = minimized ? '⤢' : '–';
        return (
            <div className={`terminal terminal__component ${minimized ? 'minimized' : ''}`} style={{ height: `${height}px` }}>
                <button onClick={this.toggleMinimize} className="terminal__minimize-btn">
                    {buttonSymbol}
                </button>
                <div ref={el => (this.terminalRef = el)} className="terminal__wrapper">
                    {/* Terminal content will be rendered here */}
                </div>
                <Resizable height={height} onResize={this.handleResize} minHeight={50} />
            </div>
        );
    }
}


export default TerminalComponent;

