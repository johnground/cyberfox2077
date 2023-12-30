import { h } from 'preact';
import FIXTURES from './Fixtures'; // Adjust the import path as needed

const Home = () => {
    return (
        <div>
            <h1>Welcome to CyberFox-2077</h1>
            <ul>
                {FIXTURES.feed.map((module, index) => (
                    <li key={index}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
