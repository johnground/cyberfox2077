// router.js

import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './Home';
import MessagePage from './MessagePage';
// Add additional imports for new components here, like ProgressPage, ProjectPage, AnsiblePage, etc.

class AppRouter extends Component {
  // Example state initialization
  state = {
    someStateValue: null,
  };

  // Example lifecycle method
  componentDidMount() {
    // Fetch data or perform some setup
    this.setState({ someStateValue: 'Initialized' });
  }

  // Provide the routes and corresponding components
  render() {
    return (
      <Router>
        <Home path="/" />
        <MessagePage path="/messages" />
        {/* Define routes for additional new components here */}
        {/* Example:
        <ProgressPage path="/progress" />
        <ProjectPage path="/project" />
        <AnsiblePage path="/ansible" />
        */}
      </Router>
    );
  }
}

export default AppRouter;