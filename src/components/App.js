import { h } from 'preact';
import { Router } from 'preact-router';
import Pad from './Pad';
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FIXTURES from './Fixtures';

// Import your page components
import Home from './Home';
import MessagePage from './MessagePage';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';

const App = () => {
  const { headerMenu, feed, conversation, messages } = FIXTURES;

  return (
    <div className="app-skeleton">
    <header className="app-header">
      {FIXTURES.headerMenu.map((item, index) => (
        <NavItem key={index} navItem={item} />
      ))}
    </header>
    <div className="app-container">
      <div className="app-a">
      <ChannelNav activeChannel={feed[0]} channels={feed} /> 
       <ConversationNav conversations={conversation} />
      </div>
      <div className="app-main">
        {/* Router will determine which component to show here based on the route */}
        <Router>
          <Home path="/" />
          <MessagePage path="/messages" />
          <ProgressPage path="/progress" />
          <ProjectPage path="/project" />
          <AnsiblePage path="/ansible" />
          {/* You can add more routes as needed */}
        </Router>
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