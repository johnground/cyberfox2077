import { h, render } from 'preact';
import AppRouter from './router'; // Adjust the import path as needed
import BackgroundControl from './BackgroundControl'; // Import the new BackgroundControl component


// Render the AppRouter component to the main app div
render(<AppRouter />, document.getElementById('app'));

// Render the BackgroundControl component to the backgroundControl div
render(<BackgroundControl />, document.getElementById('backgroundControl'));
