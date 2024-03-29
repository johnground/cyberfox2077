
import { h, Component } from 'preact';
import '/styles/ProjectDirectoryComponent.css';
class ProjectDirectoryComponent extends Component {
  state = {
    directoryContents: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchDirectoryContents();
  }

  fetchDirectoryContents() {
    fetch('/api/projects') // Updated to use the correct endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ directoryContents: data, isLoading: false });
      })
      .catch(error => {
        console.error('Failed to fetch directory contents:', error);
        this.setState({ isLoading: false });
      });
  }


  render({}, { directoryContents, isLoading }) {
    if (isLoading) {
      return <div>Loading directory contents...</div>;
    }

    return (
      <div className="directory-container">
        {directoryContents.map(item => (
          <div key={item.name}>
            {item.name} - {item.type}
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectDirectoryComponent;