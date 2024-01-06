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
      // Endpoint for Ollama API; replace with Ollama's actual IP/hostname and port if necessary
      const OLLAMA_API_URL = 'http://ollama:11434/api/chat';
      const payload = {
        model: "mistral",  // Adjust the model name as necessary
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
  
      const data = await response.json();
  
      // Adjust the response handling as necessary based on Ollama's response structure
      const reply = data?.messages?.find(msg => msg.role === 'system')?.content || 'No response from Ollama';
  
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: userInput, sender: 'user' },
          { text: reply, sender: 'bot' },
        ],
        userInput: '',
        isSending: false,
      }));
    } catch (error) {
      console.error('Error sending message to API:', error);
      this.setState({ isSending: false });
    }
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput } = this.state;
    if (userInput.trim()) {
      this.sendMessageToAPI(userInput);
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
