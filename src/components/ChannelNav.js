import { h } from 'preact';
import ChannelLink from './ChannelLink';

const ChannelNav = ({ activeChannel, channels }) => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <ChannelLink id="1" name="MODULES" unread={6} />
      </li>
      {/* Add more ChannelLink items as needed */}
    </ul>
  );
};

export default ChannelNav;

  
