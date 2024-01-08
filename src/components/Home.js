import { h } from 'preact';
import { useState } from 'preact/hooks';
import FIXTURES from './Fixtures';
import GitCheatSheet from './GitCheatSheet'; // Import the GitCheatSheet component

const Home = () => {
    const [showCheatSheet, setShowCheatSheet] = useState(false);

    const toggleCheatSheet = () => setShowCheatSheet(!showCheatSheet);

    return (
        <div className="home-container">
            <h1>Welcome to CyberFox-2077</h1>
            <button onClick={toggleCheatSheet}>Toggle Git Cheat Sheet</button>
            {showCheatSheet && <GitCheatSheet cheatSheetData={FIXTURES.gitCheatSheet} />}
            <ul className="module-list">
                {FIXTURES.feed.map((module, index) => (
                    <li key={index}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

