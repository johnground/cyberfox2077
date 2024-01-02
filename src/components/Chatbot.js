import { h, Component } from 'preact';
import './Chatbot.css';

class Chatbot extends Component {
  state = {
    messages: [],
    userInput: ''
  };

  handleInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = () => {
    const { userInput, messages } = this.state;
    if (userInput.trim()) {
      const newMessage = { text: userInput, sender: 'user' };
      this.setState({
        messages: [...messages, newMessage],
        userInput: ''
      });
      // Here you might also handle sending the message to the backend or chat processing service.
    }
  };

  render({ }, { messages, userInput }) {
    return (
      <div className="chatbot-container">
        <div className="chatbot-banner">LLM....Initialized=System.Git</div>
        <div className="chat-display-area">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input type="text" value={userInput} onInput={this.handleInput} />
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chatbot;