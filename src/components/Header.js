import { h } from 'preact';

const Header = ({ menuItems }) => (
  <header class="app-header">
    <nav className="top-nav">
      <ul>
        {menuItems.map((item, index) => (
          <li className="nav__item" key={index}>
            <a className="nav__link" href="#">
              <span className="nav__link__element">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
