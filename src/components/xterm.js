import { h, Component } from 'preact';
import { Terminal } from 'xterm';
import '/styles/styles.css';
import '/styles/xterm.css';
import io from 'socket.io-client';
import { FitAddon } from 'xterm-addon-fit';

class TerminalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { minimized: false, height: 250 };
        this.terminalRef = null;
        this.resizeHandleRef = null;
        this.fitAddon = new FitAddon();
        this.socket = null;
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
        this.terminal.loadAddon(this.fitAddon);
        this.terminal.open(this.terminalRef);
        this.fitAddon.fit();
        this.setupSocket();
        this.initializeResizeHandle();
    }

    setupSocket() {
        this.socket = io('http://localhost:3000');
        this.socket.on('terminal-output', data => {
            this.terminal.write(data);
            this.scrollToBottom(); // Call this after writing data
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

    handleResize = (e) => {
        const terminalBottom = this.terminalRef.getBoundingClientRect().bottom;
        const newHeight = terminalBottom - e.clientY;
        this.setState({ height: Math.max(newHeight, 50) }, () => {
            this.fitAddon.fit();
        });
    };

    scrollToBottom = () => {
        const viewport = this.terminalRef.querySelector('.xterm-viewport');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    };

    initializeResizeHandle = () => {
        let initialY = null;

        const onMouseMove = (e) => {
            if (initialY !== null) {
                this.handleResize(e);
            }
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            initialY = null;
        };

        const onMouseDown = (e) => {
            initialY = e.clientY;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        this.resizeHandleRef.addEventListener('mousedown', onMouseDown);
    };
    
    render({ }, { minimized, height }) {
        const buttonSymbol = minimized ? '⤢' : '–';
        return (
            <div className={`terminal terminal__component ${minimized ? 'minimized' : ''}`} style={{ height: `${height}px` }}>
                <button onClick={this.toggleMinimize} className="terminal__minimize-btn">
                    {buttonSymbol}
                </button>
                <div className="resize-handle" ref={el => (this.resizeHandleRef = el)} />
                <div ref={el => (this.terminalRef = el)} className="terminal__wrapper">
                    {/* Terminal content goes here */}
                </div>
            </div>
        );
    }
}

export default TerminalComponent;