import { h, Component } from 'preact';
import '/styles/Chatbot.css';

class Chatbot extends Component {
  state = {
    messages: [],
    userInput: '',
    isSending: false,
    height: 300, // Initial height of the chatbot
    width: 300, // Initial width of the chatbot, set this to your default or state-based width
    feedbackMessage: '', // Feedback message while retrieving the answer
  };

  feedbackMessages = [
    'Accessing neural link...',
    'Hold on NetRunner, bypassing encryption protocols to retrieve data...',
    'Interfacing with the mainframe...',
    'Decrypting data streams...',
    'Rerouting through quantum nodes...',
    'CyberFox, engaging quantum decryption algorithms...',
    'Synchronizing with CyberFox neural patterns...',
    'CyberFox, initiating datastream defragmentation...',
    'Compiling shadow net assets for CyberFox...',
    'Establishing uplink to CyberFox’s neural echelon...',
    'CyberFox, calibrating synaptic firewalls...',
    'Running intrusion countermeasures for CyberFox...',
    'CyberFox, deploying ICE-breakers into the data haven...',
    'Analyzing darknet signatures for CyberFox...',
    'Upgrading CyberFox’s cyberdeck firmware...',
    'Scrambling corp trackers for CyberFox’s safe access...',
    'Launching CyberFox’s digital persona into the Net...',
    'Encrypting CyberFox’s outbound neural traffic...',
    'CyberFox, infiltrating corporate datalocks...',
    'Harvesting black market data for CyberFox...',
    'Retrieving encrypted payloads for CyberFox...',
    'CyberFox, linking to off-grid data caches...',
    'Navigating through CyberFox’s digital labyrinth...',
    'CyberFox, projecting avatar into virtual landscapes...',
    'Disabling surveillance nodes for CyberFox’s path...',
    'Forging digital keys for CyberFox’s quest...',
    'Cloaking CyberFox’s presence from watchdog algorithms...',
    'Tracing CyberFox’s echo in the cybervoid...',
    'CyberFox, synthesizing proxy identities...',
    'Amplifying signal reach for CyberFox’s operations...',
    'CyberFox, initiating ghost protocol for anonymity...',
    'Unleashing CyberFox’s digital hounds for data retrieval...',
    // Add more feedback messages as desired
  ];

  startVerticalResize = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = this.state.height;

    const doDrag = (e) => {
      const newHeight = startHeight + (e.clientY - startY);
      this.setState({ height: Math.max(newHeight, 100) }); // Minimum height of 100px
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
    };

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  startHorizontalResize = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = this.state.width;

    const doDrag = (e) => {
      const newWidth = startWidth + (startX - e.clientX);
      this.setState({ width: Math.max(newWidth, 150) }); // Minimum width of 150px
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
    };

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  };
  startHorizontalResize = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = this.state.width;

    const doDrag = (e) => {
      const newWidth = startWidth + (startX - e.clientX);
      this.setState({ width: Math.max(newWidth, 150) }); // Minimum width of 150px
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
    };

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  handleInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  sendMessageToAPI = async (userInput) => {
    this.setState({ isSending: true, feedbackMessage: this.getRandomFeedbackMessage() });
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
          { text: combinedReplies, sender: 'bot' },
        ],
        userInput: '',
        isSending: false,
        feedbackMessage: '', // Clear the feedback message
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
        feedbackMessage: '',
      }));
    }
  };

  getRandomFeedbackMessage() {
    const randomIndex = Math.floor(Math.random() * this.feedbackMessages.length);
    return this.feedbackMessages[randomIndex];
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput } = this.state;
    if (userInput.trim()) {
      this.sendMessageToAPI(userInput);
    }
  };
  startResize = (e) => {
    const startY = e.clientY;
    const startHeight = this.state.height;

    const doDrag = (e) => {
      const newHeight = startHeight + (e.clientY - startY);
      this.handleResize(Math.max(newHeight, 100)); // Minimum height
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
    };

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  };
  render() {
    const { messages, userInput, isSending, height, width, feedbackMessage } = this.state;
  
    return (
      <div className="chatbot-container" style={{ height: `${height}px`, width: `${width}px` }}>
        <video autoPlay muted loop className="chatbot-video-bg">
          <source src="/assets/purplefox.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="chatbot-banner">LLM....Initialized=System.Git</div>
  
        <div className="chat-display-area">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
              {/* If the message is from the bot and is the last in the array, append the thinking dots */}
              {isSending && message.sender === 'bot' && index === messages.length - 1 && (
                <div className="thinking">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              )}
            </div>
          ))}
          {/* Display feedback message only if it's set and we are waiting for a response */}
          {isSending && feedbackMessage && (
            <div className="message feedback">{feedbackMessage}</div>
          )}
        </div>
        
        <div className="chat-input-area">
          <input 
            type="text" 
            value={userInput} 
            onInput={this.handleInput} 
            disabled={isSending}
          />
          <button onClick={this.handleSubmit} disabled={isSending}>
            Send
          </button>
        </div>
  
        <div 
          className="resize-handle" 
          onMouseDown={this.startVerticalResize}
        ></div>
        <div 
          className="resize-handle-horizontal" 
          onMouseDown={this.startHorizontalResize}
        ></div>
      </div>
    );
  }

}

export default Chatbot;