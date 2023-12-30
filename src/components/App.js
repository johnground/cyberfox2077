import { h } from 'preact';
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FeedMessage from './FeedMessage';
import Pad from './Pad';
import FIXTURES from './Fixtures';

const App = () => {
  // Sample data from FIXTURES, structure your actual data accordingly
  const { channels, conversations, messages } = FIXTURES;

  return (
    <div className="app-skeleton">
      <header className="app-header">
        {/* Map through NavItems and render them */}
        {FIXTURES.headerMenu.map((item, index) => (
          <NavItem key={index} navItem={item} />
        ))}
      </header>
      <div className="app-container">
        <div className="app-a">
          {/* Pass channels data to ChannelNav */}
          <ChannelNav activeChannel={channels[0]} channels={channels} />
          {/* Pass conversations data to ConversationNav */}
          <ConversationNav conversations={conversations} />
        </div>
        <div className="app-main">
          {/* Render the first message from the messages array */}
          <FeedMessage message={messages[0]} />
        </div>
        <div className="app-b">
          {/* Pad component with some content */}
          <Pad>Some content for the sidebar B</Pad>
        </div>
      </div>
    </div>
  );
};

export default App;