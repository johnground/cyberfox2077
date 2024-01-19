import { h, Component } from 'preact';
import marked from 'marked'; // Import marked library
import '/styles/readme.css'; // Import the README styles

class READMEComponent extends Component {
  state = {
    readmeContent: '',
    isLoading: true,
  };

  fetchReadme(readmePath) {
    fetch(readmePath)
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

  componentDidMount() {
    // Fallback path to general README if not specified in props
    const readmePath = this.props.readmePath || '/api/readme';
    this.fetchReadme(readmePath);
  }

  // Update the component when it receives new props (e.g., when route changes)
  componentWillReceiveProps(nextProps) {
    if (nextProps.readmePath && nextProps.readmePath !== this.props.readmePath) {
      this.setState({ isLoading: true }, () => {
        this.fetchReadme(nextProps.readmePath);
      });
    }
  }

  render({}, { readmeContent, isLoading }) {
    if (isLoading) {
      return <div>Loading README...</div>;
    }

    // Use dangerouslySetInnerHTML to render raw HTML
    return (
      <div className="readme-container">
        <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
      </div>
    );
  }
}

export default READMEComponent;