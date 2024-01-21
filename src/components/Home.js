// Home.js
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import FIXTURES from './Fixtures';
import GitCheatSheet from './GitCheatSheet';
import CourseFAQ from './CourseFAQ';

const Home = () => {
    const [showCheatSheet, setShowCheatSheet] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setShowCheatSheet(searchParams.get('show') === 'cheat-sheet');
    }, [window.location.search]);

    const toggleFAQ = () => setShowFAQ(!showFAQ);

    return (
        <div className="home-container">
            <h1>Welcome to CyberFox-2077</h1>
            {showCheatSheet && <GitCheatSheet cheatSheetData={FIXTURES.gitCheatSheet} />}
            <button onClick={toggleFAQ}>Toggle FAQ</button>
            {showFAQ && <CourseFAQ />}

            <ul className="module-list">
                {FIXTURES.feed.map((module, index) => (
                    <li key={index}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
