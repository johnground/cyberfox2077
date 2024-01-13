import { h, Component } from 'preact';
import marked from 'marked'; // Import marked library
import '/styles/readme.css'; // Import the README styles

class READMEComponent extends Component {
  state = {
    readmeContent: '',
    isLoading: true,
  };

  componentDidMount() {
    fetch('/api/readme')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        this.setState({ readmeContent: marked(data), isLoading: false }); // Convert markdown to HTML
      })
      .catch((error) => {
        console.error('Failed to fetch README:', error);
        this.setState({ isLoading: false });
      });
  }

  render({}, { readmeContent, isLoading }) {
    if (isLoading) {
      return <div>Loading README...</div>;
    }

    // Use dangerouslySetInnerHTML to render raw HTML
    return (
      <div className="readme-container">
        <h1>README</h1>
        <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
      </div>
    );
  }
}

export default READMEComponent;
