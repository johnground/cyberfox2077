import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const ProjectPage = () => {
    const [projects, setProjects] = useState([]); // State to store the list of projects

    useEffect(() => {
        // Fetch the list of projects from the server
        fetch('/api/projects')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setProjects(data)) // Update the state with the fetched projects
            .catch(error => {
                console.error('Error fetching projects:', error.message);
            });
    }, []); // The empty array [] means this effect runs only once when the component mounts

    return (
        <div className="project-page">
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.name}>{project.name}</li> // Render each project as a list item
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;
