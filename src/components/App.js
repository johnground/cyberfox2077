import { h } from 'preact';
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FeedMessage from './FeedMessage';
import Pad from './Pad';
import FIXTURES from '../Fixtures';

const App = () => {
  return (
    <div className="app-skeleton">
      <header className="app-header">
        {/* Implementation for header including NavItems */}
      </header>
      <div className="app-container">
        <div className="app-a">
          <ChannelNav />
          <ConversationNav />
        </div>
        <div className="app-main">
          <FeedMessage message="Test" />
        </div>
        <div className="app-b">
          <Pad content="Test" />
        </div>
      </div>
    </div>
  );
};

export default App;
