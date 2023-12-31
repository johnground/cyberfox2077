import { h, Component } from 'preact';
import FeedMessage from './FeedMessage';

class MessagePage extends Component {
  // Step 1
  state = {
    command: '',
    output: [],
  };

  // Step 2
  handleCommandChange = (event) => {
    this.setState({ command: event.target.value });
  };

  // Step 3
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

  // Step 4
  render() {
    const { command, output } = this.state;
    return (
      <div className="channel-feed">
        <div className="channel-feed__body">
          {/* Display each command and its output */}
          {output.map((entry, index) => (
            <FeedMessage key={index} message={entry.commandOutput} />
          ))}
        </div>
        <div className="channel-feed__footer">
          <form
            className="channel-message-form"
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
            <div className="form-footer">
              <button
                className="button button--primary button--size-xl"
                type="submit"
              >
                Execute
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MessagePage;

