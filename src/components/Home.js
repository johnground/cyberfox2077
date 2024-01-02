import { h } from 'preact';
import FIXTURES from './Fixtures'; // Adjust the import path as needed
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to CyberFox-2077</h1>
            <ul className="module-list">
                {FIXTURES.feed.map((module, index) => (
                    <li key={index}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
