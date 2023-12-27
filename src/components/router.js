import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Import your page components
import Home from './Home';
// Import other components as needed

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Home path="/" />
                {/* Add more routes here for other components */}
            </Router>
        );
    }
}

export default AppRouter;
