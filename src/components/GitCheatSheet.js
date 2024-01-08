import { h } from 'preact';

const GitCheatSheet = ({ cheatSheetData }) => {
    // Placeholder content, to be replaced with dynamic cheat sheet data
    return (
        <div className="git-cheat-sheet">
            <h2>Git Cheat Sheet</h2>
            <p>This is a placeholder for the Git cheat sheet content.</p>
            {/* Render cheat sheet data here */}
            {cheatSheetData && cheatSheetData.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GitCheatSheet;