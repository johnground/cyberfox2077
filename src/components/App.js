import { h } from 'preact';
import { Router } from 'preact-router';
import Pad from './Pad';
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FIXTURES from './Fixtures';
import TerminalComponent from './xterm';


import Home from './Home';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';

const App = () => {
  const { headerMenu, feed, conversation } = FIXTURES;

  return (
    <div className="app-skeleton">
      <header className="app-header">
        <img src="/assets/GitPunkFox.png" alt="Git Fox" className="header-logo" />
        {headerMenu.map((item, index) => (
          <NavItem key={index} navItem={item} />
        ))}
      </header>
      <div className="app-container">
        <div className="app-a">
          <ChannelNav activeChannel={feed[0]} channels={feed} />
          <ConversationNav conversations={conversation} />
        </div>
        <div className="app-main">
          <Router>
            <Home path="/" />
            <ProgressPage path="/progress" />
            <ProjectPage path="/project" />
            <AnsiblePage path="/ansible" />
          </Router>
          {/* Place the Terminal component outside of the Router to keep it persistent */}
          <TerminalComponent />
        </div>
        <div className="app-b">
        {/* Sidebar B can be a static component or adapted to change with routes */}
        {/* Example static content: */}
        <Pad>Some content for the sidebar B</Pad>
        </div>
      </div>
    </div>
  );
};

export default App;