import { h } from 'preact';
import Badge from './Badge';

const ChannelLink = ({ id, name, unread }) => {
  return (
    <span
      className={`channel-link ${unread > 0 ? "channel-link--unread" : ""}`}
    >
      <span className="channel-link__icon">#</span>
      <span className="channel-link__element">{name}</span>
      {unread > 0 && (
        <Badge>{unread}</Badge>
      )}
    </span>
  );
};

export default ChannelLink;