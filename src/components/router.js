// router.js

import { h, Component } from 'preact';
import { Router } from 'preact-router';
import App from './App'; // Import App component
import Home from './Home';
import MessagePage from './MessagePage';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App path="/" />
        <Home path="/home" />
        <MessagePage path="/messages" />
        <ProgressPage path="/progress" />
        <ProjectPage path="/project" />
        <AnsiblePage path="/ansible" />
        {/* Add other routes as needed */}
      </Router>
    );
  }
}

export default AppRouter;
