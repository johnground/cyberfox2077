import { h } from 'preact';
import '/styles/module2.css'; // Ensure this path is correct for your styles

const Module2 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 2: Gitlab Essentials</h1>
      </header>
      
      <article className="content">
        <section>
          <h2>What is the difference between Github and Gitlab</h2>
          <p>Gitlab is an open source tool that provides support for teams to plan, develop, test, build, deploy, monitor, and publicize their software projects, covering the entire DevOps lifecycle. Gitlab is a web-based Git repository manager that provides Git repository management, code reviews, issue tracking, activity feeds, wikis, and continuous integration (CI) and continuous deployment (CD) pipelines into a single user interface.</p>
        </section>

        <section className="content-section">
          <h2>Installing GitLab with Docker</h2>
          <p>Now, let's explore how to set up a GitLab instance using Docker. GitLab provides a comprehensive platform for managing your security projects, including code repositories, issue tracking, and continuous integration.</p>
          <ol>
            <li>Install Docker on your system.</li>
            <li>Pull the GitLab Docker image: <code>docker pull gitlab/gitlab-ce:latest</code></li>
            <li>Run the GitLab container with the necessary configuration:</li>
            <pre>
              {`docker run --detach \\
                --hostname gitlab.example.com \\
                --publish 443:443 --publish 80:80 --publish 222:22 \\
                --name gitlab \\
                --restart always \\
                --volume /srv/gitlab/config:/etc/gitlab \\
                --volume /srv/gitlab/logs:/var/log/gitlab \\
                --volume /srv/gitlab/data:/var/opt/gitlab \\
                gitlab/gitlab-ce:latest`}
            </pre>
            <li>Access GitLab through your web browser at <code>http://localhost/users/sign_in</code>.</li>
          </ol>
        </section>

        <section className="content-section">
          <h2>Setting Up Your GitLab Password</h2>
          <p>Once your GitLab instance is up and running, you will need to set up the initial root password for the root user. Open your web browser and navigate to your GitLab instance. Click on the "Sign In" button. Enter the default username "root" and the password provided during the GitLab installation. Once logged in, you will be prompted to change the password for the root user. Follow the instructions to set a new password and confirm it. Click on the "Change your password" button to save the new password.</p>
        </section>

        <section className="content-section">
          <h2>Troubleshooting</h2>
          <p>If you encounter any issues while setting up the GitLab container with Docker, here are some troubleshooting steps. Check if Docker is installed and running on your system. Verify that you have pulled the correct GitLab Docker image. Ensure that the necessary ports (443, 80, 22) are not being used by other applications. Check the Docker container logs for any error messages. Make sure the necessary volumes are properly mounted. If all else fails, consult the GitLab documentation or community forums for further assistance.</p>
        </section>

        <section className="content-section">
          <h2>GitLab's Relevance to Cybersecurity</h2>
          <p>Private Repositories: GitLab allows you to create private repositories, which can only be accessed by authorized users. Role-Based Access Control (RBAC): GitLab supports RBAC, allowing you to define granular access controls for different users and groups. Security Scanning: GitLab provides built-in security scanning tools to help identify vulnerabilities in your code. Continuous Integration/Continuous Deployment (CI/CD): GitLab offers robust CI/CD capabilities, enabling you to automate security testing and deployment processes. Issue Tracking: GitLab's issue tracking system helps you manage and track security-related tasks and vulnerabilities. Collaboration: GitLab's collaboration features facilitate teamwork and knowledge sharing among security professionals.</p>
        </section>

        {/* Additional content sections would go here */}

        <footer className="module-footer">
          {/* Navigation buttons would go here */}
        </footer>
      </article>
    </div>
  );
};

export default Module2;
