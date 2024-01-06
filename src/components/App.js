import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Chatbot from './Chatbot'; // Import the Chatbot component
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FIXTURES from './Fixtures';
import TerminalComponent from './xterm';
import Module1 from './CourseModules/Module1'; 
import Home from './Home';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';

// Convert App from a functional component to a class-based component to handle resizing
export default class App extends Component {
  // Set initial state
  state = {
    sidebarWidth: '20%', 
    selectedModuleId: null,
  };

  // Event handler for starting the resize action
  handleMouseDown = (event) => {
    event.preventDefault();

    // Localize starting conditions
    const startWidth = this.sidebar.offsetWidth;
    const startX = event.clientX;

    // Event handler for mouse move that calculates new width
    function doDrag(event) {
      const newWidth = Math.max(15, Math.min(40, (startWidth + event.clientX - startX) / window.innerWidth * 100));
      this.setState({ sidebarWidth: newWidth + '%' });
    }

    // Event handler for mouse up to end the resize action
    const stopDrag = () => {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    };

    // Bind event listeners for mouse move and mouse up
    document.documentElement.addEventListener('mousemove', doDrag.bind(this), false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  };

  handleModuleSelect = (moduleId) => {
    this.setState({ selectedModuleId: moduleId });
  };
  
  render({}, { sidebarWidth }) {
    const { headerMenu, feed, conversation } = FIXTURES;

    return (
      <div className="app-skeleton">
        <header className="app-header">
          <img src="/assets/gitfox.png" alt="Git Fox" className="header-logo" />
          {headerMenu.map((item, index) => (
            <NavItem key={index} navItem={item} />
          ))}
        </header>
        <div className="app-container">
          <div className="app-a">
          <ChannelNav activeChannel={feed[0]} channels={FIXTURES.channels} />
            <ConversationNav conversations={conversation} />
          </div>
          <div className="app-main">
            <Router>
              <Home path="/" /> 
              <Module1 path="/module1" />
              <ProgressPage path="/progress" />
              <ProjectPage path="/project" />
              <AnsiblePage path="/ansible" />
            </Router>
            <TerminalComponent />
          </div>
          <div className="app-b" ref={(el) => { this.sidebar = el; }} style={{ width: sidebarWidth }}>
            {/* Resize handle: */}
            <div className="resize-handle" onMouseDown={this.handleMouseDown}></div>
            {/* Include the Chatbot component here */}
            <Chatbot />
          </div>
        </div>
      </div>
    );
  }
}