// NavItem.js
import { h } from 'preact';
import Badge from './Badge'; // Assuming Badge is also modularized
import { route } from 'preact-router';

export default function NavItem({ navItem }) {

  const handleNavigation = (event) => {
    // Prevent the default anchor behavior
    event.preventDefault();

    if (navItem.text === "CyberFox-2077 Home") {
      // Navigate to the root path "/"
      route('/');
    } else if (navItem.text === "README") {
      // Navigate to the README page
      route('/readme');
    } else if (navItem.text === "PROJECT") {
      // Navigate to the Project directory listing
      route('/project');
    } else {
      // Placeholder for other links
      console.log(`Navigate to ${navItem.text}`);
    }
  };

  return (
    <li className="nav__item">
      <a
        className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`}
        href="#"
        onClick={handleNavigation}
      >
        <span className="nav__link__element">{navItem.text}</span>
        {navItem.notificationCount > 0 && (
          <Badge>{navItem.notificationCount}</Badge>
        )}
      </a>
    </li>
  );
}
