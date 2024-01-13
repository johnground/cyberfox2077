import { h } from 'preact';
import ChannelLink from './ChannelLink';
import '/styles/ChannelNav.css'; // Import the new ChannelNav specific stylesheet

const ChannelNav = ({ channels }) => {
  return (
    <nav className="nav">
      {/* The 'Modules' header will have distinct styling */}
      <h2 className="modules-header">MODULES</h2>
      {/* Map over channels to create a list of ChannelLink components */}
      {channels.map((channel) => (
        <ChannelLink key={channel.id} id={channel.id} name={channel.name} unread={channel.unread} />
      ))}
    </nav>
  );
};


export default ChannelNav;

