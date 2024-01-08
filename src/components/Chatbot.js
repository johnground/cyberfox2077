import { h, Component } from 'preact';
import '/styles/Chatbot.css';

class Chatbot extends Component {
  state = {
    messages: [],
    userInput: '',
    isSending: false,
  };

  handleInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  sendMessageToAPI = async (userInput) => {
    this.setState({ isSending: true });
    let responseText = '';
    try {
      const OLLAMA_API_URL = 'http://localhost:8080/ollama/api/chat';
      const payload = {
        model: "mistral",
        messages: [{ role: "user", content: userInput }]
      };

      const response = await fetch(OLLAMA_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      responseText = await response.text(); 
      const splitMessages = responseText.trim().split(/\}\s*\{/);
      const replies = splitMessages.map((msg, index, array) => {
        if (index > 0) msg = '{' + msg;
        if (index < array.length - 1) msg = msg + '}';
        return JSON.parse(msg).message.content;
      });

      // Combine the individual replies into a single batched message
      const combinedReplies = replies.join(' ');

      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: userInput, sender: 'user' },
          { text: combinedReplies, sender: 'bot' }, // Add combined replies as a single message
        ],
        userInput: '',
        isSending: false,
      }));
    } catch (error) {
      console.error('Error sending message to API:', error);
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: `Error: ${error.message}`, sender: 'system' },
          { text: `Raw Response: ${responseText}`, sender: 'system' },
        ],
        isSending: false,
      }));
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput } = this.state;
    if (userInput.trim()) {
      this.sendMessageToAPI(userInput);
    }
  };

  render() {
    const { messages, userInput, isSending } = this.state;
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
          <input type="text" value={userInput} onInput={this.handleInput} disabled={isSending} />
          <button onClick={this.handleSubmit} disabled={isSending}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Chatbot;


