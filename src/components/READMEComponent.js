import { h, Component } from 'preact';

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
        this.setState({ readmeContent: data, isLoading: false });
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

    return (
      <div>
        <h1>README</h1>
        <pre>{readmeContent}</pre>
      </div>
    );
  }
}

export default READMEComponent;
