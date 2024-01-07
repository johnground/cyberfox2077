import { h, Component } from 'preact';
import './Chatbot.css';

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
        // If the HTTP response is not ok, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Processing the API response and updating the state with the new messages
      const replies = data.messages
        .filter(msg => msg.role === 'assistant')
        .map(msg => msg.content);

      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: userInput, sender: 'user' },
          ...replies.map(reply => ({ text: reply, sender: 'bot' })),
        ],
        userInput: '',
        isSending: false,
      }));
    } catch (error) {
      console.error('Error sending message to API:', error);
      // Error handling for failed fetch requests, potentially due to CORS issues
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: `Error: ${error.message}`, sender: 'system' },
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
