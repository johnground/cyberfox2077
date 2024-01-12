import { h, Component } from 'preact';

class Resizable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            lastY: 0,
        };
    }

    startResize = (e) => {
        this.setState({
            isDragging: true,
            lastY: e.clientY,
        });

        document.addEventListener('mousemove', this.doResize);
        document.addEventListener('mouseup', this.stopResize);
    };

    doResize = (e) => {
        if (!this.state.isDragging) {
            return;
        }
    
        const { onResize, minHeight } = this.props;
        const { lastY } = this.state;
        const deltaY = e.clientY - lastY;
    
        // Invert the resizing behavior by subtracting deltaY
        const newHeight = Math.max(this.props.height - deltaY, minHeight);
    
        onResize(newHeight);
        this.setState({ lastY: e.clientY });
    };
    

    stopResize = () => {
        this.setState({
            isDragging: false,
        });

        document.removeEventListener('mousemove', this.doResize);
        document.removeEventListener('mouseup', this.stopResize);
    };

    render() {
        return (
            <div className="resize-handle" onMouseDown={this.startResize}>
                {/* You can add visual elements for the resize handle here */}
            </div>
        );
    }
}

export default Resizable;
