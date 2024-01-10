// Resizable.js
import { h, Component } from 'preact';

export default class Resizable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isResizing: false,
            startY: 0,
            startHeight: props.height,
        };
    }

    onMouseDown = (e) => {
        this.setState({
            isResizing: true,
            startY: e.clientY,
            startHeight: this.props.height,
        });
        e.preventDefault();
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };

    onMouseMove = (e) => {
        if (!this.state.isResizing) return;
        const deltaY = e.clientY - this.state.startY;
        const newHeight = this.state.startHeight - deltaY; // Subtract delta to increase height when moving up
        this.props.onResize(Math.max(this.props.minHeight, newHeight));
    };

    onMouseUp = () => {
        this.setState({ isResizing: false });
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };

    render() {
        return (
            <div
                className="resize-handle"
                onMouseDown={this.onMouseDown}
                style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', cursor: 'ns-resize', background: '#fff' }}
            ></div>
        );
    }
}

