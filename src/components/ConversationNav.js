import { h } from 'preact';
import ChannelLink from './ChannelLink';

const ChannelNav = ({ activeChannel, channels }) => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <ChannelLink id="1" name="Module 1: Introduction to Version Control and Git"/>
      </li>
      <li className="nav__item">
        <ChannelLink id="2" name="Module 2: GitLab Essentials"/>
      </li>
      <li className="nav__item">
        <ChannelLink id="3" name="Module 3: Advanced Git Techniques"/>
      </li>
      <li className="nav__item">
        <ChannelLink id="4" name="Module 4: Ansible and Automation"/>
      </li>
      <li className="nav__item">
        <ChannelLink id="5" name="Module 5: Developing Ansible Roles for OpenCTI"/>
      </li>
      <li className="nav__item">
        <ChannelLink id="6" name="Module 6: Beyond Ansible and Git"/>
      </li>
    </ul>
  );
};

export default ChannelNav;

