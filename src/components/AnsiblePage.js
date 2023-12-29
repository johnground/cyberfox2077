// AnsiblePage.js

import { h, Component } from 'preact';

class AnsiblePage extends Component {
  state = {
    ansibleInfo: null,
    isLoading: true,
  };

  componentDidMount() {
    // Fetch Ansible configuration or status, etc.
    // This is a placeholder for where you might set the state with real data
    this.setState({
      ansibleInfo: {
        version: '2.9.10',
        status: 'Connected',
      },
      isLoading: false,
    });
  }

  render({ }, { isLoading, ansibleInfo }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Ansible Status</h1>
        <p>Version: {ansibleInfo.version}</p>
        <p>Status: {ansibleInfo.status}</p>
      </div>
    );
  }
}

export default AnsiblePage;