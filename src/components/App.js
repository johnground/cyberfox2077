import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Chatbot from './Chatbot';
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
import GitCheatSheet from './GitCheatSheet'; // Import GitCheatSheet component

export default class App extends Component {
  state = {
    sidebarWidth: '20%',
    selectedModuleId: null,
  };

  handleMouseDown = (event) => {
    event.preventDefault();
    const startWidth = this.sidebar.offsetWidth;
    const startX = event.clientX;

    const doDrag = (event) => {
      const newWidth = Math.max(15, Math.min(40, (startWidth + event.clientX - startX) / window.innerWidth * 100));
      this.setState({ sidebarWidth: newWidth + '%' });
    };

    const stopDrag = () => {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    };

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
            <div className="resize-handle" onMouseDown={this.handleMouseDown}></div>
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
  } // Add a closing brace to match the opening brace
