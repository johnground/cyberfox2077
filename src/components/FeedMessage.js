import { h } from 'preact';

const FeedMessage = ({ message }) => {
  if (typeof message === 'string') {
    return <div className="message">{message}</div>;
  } else if (typeof message === 'object' && message.command && message.commandOutput) {
    return (
      <div className="message">
        <div className="message__body">{message.commandOutput}</div>
        <div className="message__footer">{message.command}</div>
      </div>
    );
  } else {
    return <div className="message">Unknown message format</div>;
  }
};

export default FeedMessage;

