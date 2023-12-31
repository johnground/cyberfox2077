// Terminal.js
import { h, Component } from 'preact';
import FeedMessage from './FeedMessage';

class Terminal extends Component {
  state = {
    command: '',
    output: [],
  };

  handleCommandChange = (event) => {
    this.setState({ command: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { command, output } = this.state;

    if (!command.trim()) {
      return; // If command is only whitespace, do nothing
    }

    let commandOutput;
    // Simulate command processing
    switch (command.trim()) {
      case 'help':
        commandOutput = 'Available commands: help, list, exit';
        break;
      // Add other cases for different commands here
      default:
        commandOutput = `Command not recognized: ${command}`;
        break;
    }

    // Append to output
    this.setState({
      output: [...output, { command, commandOutput }],
      command: '', // Clear the input field
    });
  };

  render() {
    const { command, output } = this.state;
    return (
      <div className="terminal">
        <div className="terminal__output">
          {/* Display each command and its output */}
          {output.map((entry, index) => (
            <FeedMessage key={index} message={entry} />
          ))}
        </div>
        <form
          className="terminal__input-form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="command" className="form-label">Command</label>
            <div className="form-control">
              <textarea
                id="command"
                className="form-control"
                name="command"
                value={command}
                onInput={this.handleCommandChange}
                placeholder="Type your command..."
              ></textarea>
            </div>
          </div>
          <button
            className="button button--primary"
            type="submit"
          >
            Execute
          </button>
        </form>
      </div>
    );
  }
}

export default Terminal;