import { h } from 'preact';
import { Link } from 'preact-router/match';
import Badge from './Badge';
import '/styles/ChannelLink.css';

const ChannelLink = ({ id, name, unread }) => {
  // Determine the correct href
  const href = name === 'README' ? '/readme' : `/module/${id}`;

  return (
    <Link 
      className={`channel-link ${unread > 0 ? "channel-link--unread" : ""}`}
      href={href}
    >
      <span className="channel-link__icon">#</span>
      <span className="channel-link__element">{name}</span>
      {unread > 0 && <Badge>{unread}</Badge>}
    </Link>
  );
};

export default ChannelLink;
