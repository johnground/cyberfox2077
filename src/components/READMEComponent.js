import { h, Component } from 'preact';

export default class READMEComponent extends Component {
  state = { content: '' };

  componentDidMount() {
    fetch('/api/readme')
      .then(response => response.text())
      .then(text => this.setState({ content: text }))
      .catch(error => console.error('Error fetching README:', error));
  }

  render({}, { content }) {
    return (
      <div className="readme-content">
        <pre>{content}</pre>
      </div>
    );
  }
}
