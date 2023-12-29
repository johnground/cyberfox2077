import { h, Component } from 'preact';
import FeedMessage from './FeedMessage';

class MessagePage extends Component {
  render() {
    return (
      <div>
        <FeedMessage message="Test Message" />
        {/* Additional content for MessagePage */}
      </div>
    );
  }
}

export default MessagePage;

