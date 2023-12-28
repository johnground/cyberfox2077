import { h, Component } from 'preact';

class MessagePage extends Component {
  render() {
    return (
      <div>
        {/* Display messages */}
        <FeedMessage message={FIXTURES.messages[0]} />
        
        {/* Message input form */}
        <div className="channel-feed__footer">
          <form className="channel-message-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label" for="message">Message</label>
              <div className="form-control">
                <textarea id="message" className="form-control" name="message"></textarea>
              </div>
            </div>
            {/* Add any other form controls here */}
          </form>
        </div>
      </div>
    );
  }
}

export default MessagePage;
