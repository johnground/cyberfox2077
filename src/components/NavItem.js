import { h } from 'preact';
import Badge from './Badge'; // Assuming Badge is also modularized

export default function NavItem({ navItem }) {

  const handleNavigation = (event) => {
    // Prevent the default anchor behavior
    event.preventDefault();

    if (navItem.text === "CyberFox-2077 Home") {
      // If it's the "CyberFox-2077 Home" link, navigate to the root path
      window.location.href = "http://cyberfox:3000/";
    } else if (navItem.text === "README") {
      // If it's the "README" link, use the route that READMEComponent is configured to handle
      window.location.href = "http://cyberfox:3000/readme";
    } else {
      // For all other links, you can define behavior or allow default behavior
      // This is a placeholder and should be replaced with actual navigation logic
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
