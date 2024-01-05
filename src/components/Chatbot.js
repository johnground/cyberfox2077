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

    // Define the POST request body
    const requestBody = {
      model: "mistral", // Replace "mistral" with your actual OLLAMA model name
      messages: [
        { role: "user", content: userInput }
      ]
    };

    try {
      // Corrected endpoint to match OLLAMA's chat endpoint
      const response = await fetch('http://0.0.0.0:11434/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Assuming the API returns an array of messages and the last message is the bot's response
      const botResponse = data.messages[data.messages.length - 1].content;

      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: userInput, sender: 'user' },
          { text: botResponse, sender: 'bot' },
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
