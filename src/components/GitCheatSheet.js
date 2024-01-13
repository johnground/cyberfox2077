/** @jsx h */
import { h } from 'preact';
import '/styles/GitCheatSheet.css'; // Importing the CSS file

const GitCheatSheet = ({ cheatSheetData }) => {
    return (
        <div className="git-cheat-sheet">
            <h2>Git Cheat Sheet</h2>
            {cheatSheetData && cheatSheetData.map((item, index) => (
                <div key={index} className="cheat-sheet-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GitCheatSheet;
