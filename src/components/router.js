import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Import your page components
import Home from './Home';
import MessagePage from './MessagePage'; // Import the new MessagePage component

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Home path="/" />
                <MessagePage path="/messages" /> {/* New route for the MessagePage */}
                {/* You can add more routes here for other components in the future */}
            </Router>
        );
    }
}

export default AppRouter;

