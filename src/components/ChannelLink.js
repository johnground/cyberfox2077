import { h } from 'preact';
import Badge from './Badge';
import '/styles/ChannelLink.css';

// Enhanced ChannelLink component with clickable functionality
const ChannelLink = ({ id, name, unread, onClick }) => {
  return (
    <a 
      className={`channel-link ${unread > 0 ? "channel-link--unread" : ""}`}
      onClick={() => onClick(id)}
      role="button"
      tabindex="0"
    >
      <span className="channel-link__icon">#</span>
      <span className="channel-link__element">{name}</span>
      {unread > 0 && <Badge>{unread}</Badge>}
    </a>
  );
};

export default ChannelLink;
