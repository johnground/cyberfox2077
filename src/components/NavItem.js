import { h } from 'preact';
import Badge from './Badge';
import { route } from 'preact-router';

export default function NavItem({ navItem }) {
  let fileInput;

  const handleNavigation = (event) => {
    event.preventDefault();

    // Redirect to external URLs for specific nav items
    if (navItem.text === "Ansible")  {
      window.open('https://docs.ansible.com/', '_blank');
    } else if (navItem.text === "Projects") {
      window.open('http://cyberfox/', '_blank');
    }
    // Handle internal routing for other nav items
    else if (navItem.text === "Files") {
      fileInput.click();
    } else if (navItem.text === "CyberFox-2077 Home") {
      route('/');
    } else if (navItem.text === "README") {
      route('/readme');
    } else if (navItem.text === "Project") {
      window.open('http://cyberfox/', '_blank');
    } else {
      console.log(`Navigate to ${navItem.text}`);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => alert('File uploaded successfully'))
      .catch(error => alert('Error uploading file'));
  };

  return (
    <li className="nav__item">
      <a
        className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`}
        href="#"
        onClick={handleNavigation}
      >
        <span className="nav__link__element">{navItem.text}</span>
        {navItem.notificationCount > 0 && <Badge>{navItem.notificationCount}</Badge>}
      </a>
      {navItem.text === "Files" && (
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          ref={(input) => (fileInput = input)}
        />
      )}
    </li>
  );
}
