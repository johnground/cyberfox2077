import { h, Component } from 'preact';
import io from 'socket.io-client';
import FeedMessage from './FeedMessage';

class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      command: '',
      output: [],
    };
    // Change to the appropriate server address if necessary
    this.socket = io('http://localhost:3000'); 
  }

  handleCommandChange = (event) => {
    this.setState({ command: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { command } = this.state;
    if (command.trim()) {
      this.socket.emit('terminal-input', command + '\n'); // Send to backend
      this.setState({ command: '' }); // Clear command input field
    }
  };

  componentDidMount() {
    // Listen for terminal output from the server
    this.socket.on('terminal-output', (output) => {
      this.setState(state => ({
        output: [...state.output, output]
      }));
    });
  }

  componentWillUnmount() {
    // Clean up listener and socket connection on unmount
    this.socket.off('terminal-output');
    this.socket.close();
  }

  render() {
    const { command, output } = this.state;
    return (
      <div className="terminal">
        <div className="terminal__output">
          {/* Display each chunk of data as a FeedMessage component */}
          {output.map((data, index) => (
            <FeedMessage key={index} message={data} />
          ))}
        </div>
        <form className="terminal__input-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="command" className="form-label">Command:</label>
            <div className="form-control">
              <textarea
                id="command"
                className="form-control"
                name="command"
                value={command}
                onInput={this.handleCommandChange}
                placeholder="Type your command here..."
              ></textarea>
            </div>
          </div>
          <button className="button button--primary" type="submit">Execute</button>
        </form>
      </div>
    );
  }
}

export default Terminal;

