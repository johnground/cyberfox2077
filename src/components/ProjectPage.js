// ProjectPage.js

import { h, Component } from 'preact';

class ProjectPage extends Component {
  state = {
    projects: [],
    isLoading: true,
  };

  componentDidMount() {
    // Fetch projects list from an API or define static data here
    // This is just a placeholder for how you might start fetching data
    this.setState({
      projects: [
        { id: 1, name: 'CyberFox-2077 Project' }, 
        // ...other projects
      ],
      isLoading: false,
    });
  }

  render({ }, { isLoading, projects }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectPage;