import { h } from 'preact';
import { render } from 'preact';
import App from './App';

// Assuming 'app' is the ID of your root element in your HTML file.
const rootElement = document.getElementById('app');

// Render the App component to the root element.
render(<App />, rootElement);
