import { h } from 'preact';
import Badge from './Badge'; // Assuming you have a Badge component
import { route } from 'preact-router';

export default function NavItem({ navItem }) {
  let fileInput;

  const handleNavigation = (event) => {
    event.preventDefault();

    // Check if the navItem is "Files" and trigger file input
    if (navItem.text === "Files") {
      fileInput.click();
    } else if (navItem.text === "CyberFox-2077 Home") {
      route('/');
    } else if (navItem.text === "README") {
      route('/readme');
    } else if (navItem.text === "Project") {
      route('/project');
    } else {
      console.log(`Navigate to ${navItem.text}`);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Implement the file upload logic here
    // For example, using FormData to append the file and send it to the server
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
