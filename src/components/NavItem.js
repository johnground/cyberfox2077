import { h } from 'preact';
import Badge from './Badge'; // Assuming Badge is also modularized

export default function NavItem({ navItem }) {

  const handleNavigation = (event) => {
    // Prevent default anchor behavior
    event.preventDefault();

    // Navigate to the root path if the link is "CyberFox-2077 Home"
    if (navItem.text === "CyberFox-2077 Home") {
      window.location.href = "http://cyberfox:3000/";
    } else {
      // You can extend this condition to handle other specific links
      // For now, do nothing or handle other cases as needed
    }
  };

  return (
    <li className="nav__item">
      <a
        className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`}
        href="#"
        onClick={handleNavigation} // Add the onClick event listener here
      >
        <span className="nav__link__element">{navItem.text}</span>
        {navItem.notificationCount > 0 && (
          <Badge>{navItem.notificationCount}</Badge>
        )}
      </a>
    </li>
  );
}
