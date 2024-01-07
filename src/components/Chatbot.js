import { h, Component } from 'preact';
import './Chatbot.css';

class Chatbot extends Component {
  state = {
    messages: [],
    userInput: '',
    isSending: false,
    waitingMessage: null, // Store the key for the waiting message
  };

  handleInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  addWaitingMessage = () => {
    // Add a unique key for the waiting message to remove it later
    const waitingMessageKey = Date.now();
    this.setState((prevState) => ({
      messages: [
        ...prevState.messages,
        { key: waitingMessageKey, text: "This may take a second, you are running on CPU...", sender: 'system' },
      ],
      waitingMessage: waitingMessageKey,
    }));
    return waitingMessageKey;
  };

  removeWaitingMessage = (key) => {
    this.setState((prevState) => ({
      messages: prevState.messages.filter(message => message.key !== key),
      waitingMessage: null,
    }));
  };

  sendMessageToAPI = async (userInput) => {
    this.setState({ isSending: true });

    // Add the waiting message and get its key
    const waitingMessageKey = this.addWaitingMessage();

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

      const combinedReplies = replies.join(' ');

      this.setState((prevState) => ({
        messages: [
          ...prevState.messages.filter(message => message.key !== waitingMessageKey), // Remove the waiting message
          { text: userInput, sender: 'user' },
          { text: combinedReplies, sender: 'bot' },
        ],
        userInput: '',
        isSending: false,
      }));
    } catch (error) {
      console.error('Error sending message to API:', error);
      this.setState((prevState) => ({
        messages: prevState.messages.filter(message => message.key !== waitingMessageKey), // Remove the waiting message
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
            <div key={message.key || index} className={`message ${message.sender}`}>
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



