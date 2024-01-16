import { h } from 'preact';
import '/styles/module2.css'; // Ensure this path is correct for your styles

const Module2 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 2: GitLab Essentials</h1>
      </header>
      
      <article className="content">
        <section>
          <h2>The Evolution from GitHub to GitLab: A Cyber Odyssey</h2>
          <p><i>(In a dimly lit command center, CyberFox contemplates the strategic move from GitHub to GitLab.)</i></p>
          <p>While GitHub has been the cornerstone of version control for many, the tides are shifting towards GitLab. GitLab, an open-source tool, supports the entire DevOps lifecycle, integrating code repositories, issue tracking, CI/CD pipelines, and more into a cohesive platform. This shift is more than just a change in tools; it's a strategic move in the cybersecurity chess game.</p>
        </section>

        <section>
          <h2>Deploying GitLab: A Docker Odyssey</h2>
          <p>Deploying GitLab in a Docker container is like launching a spacecraft into the vast expanse of the DevOps universe. Let's embark on this journey.</p>
          <ol>
            <li>First, ensure Docker is installed on your system.</li>
            <li>Next, pull the GitLab Docker image:</li>
            <div className="code-block">
              <code>docker pull gitlab/gitlab-ce:latest</code>
            </div>
            <li>Launch your GitLab container into orbit:</li>
            <div className="code-block">
              <code>
                docker run --detach \<br />
                --hostname gitlab.example.com \<br />
                --publish 443:443 --publish 80:80 --publish 222:22 \<br />
                --name gitlab \<br />
                --restart always \<br />
                --volume /srv/gitlab/config:/etc/gitlab \<br />
                --volume /srv/gitlab/logs:/var/log/gitlab \<br />
                --volume /srv/gitlab/data:/var/opt/gitlab \<br />
                gitlab/gitlab-ce:latest
              </code>
            </div>
            <li>Finally, navigate to <code>http://localhost/users/sign_in</code> to access your GitLab universe.</li>
          </ol>
        </section>

        <section>
          <h2>First Login: Setting the Command Codes</h2>
          <p>Upon first entry into the GitLab domain, a secure password is your first line of defense. Navigate to your GitLab instance, use the default username "root", and follow the prompts to set a secure and memorable password.</p>
        </section>

        <section>
          <h2>Overcoming Obstacles: GitLab Troubleshooting</h2>
          <p>Even the most skilled cybernauts face challenges. Here's how to navigate through common GitLab setup issues:</p>
          <ul>
            <li>Ensure Docker is active and running.</li>
            <li>Verify the GitLab image: <code>gitlab/gitlab-ce:latest</code>.</li>
            <li>Check that ports 443, 80, and 22 are not in use by other programs.</li>
            <li>Review Docker container logs for clues.</li>
            <li>Confirm that volumes are correctly mounted.</li>
          </ul>
          <p>If challenges persist, the GitLab community forums are a beacon of knowledge.</p>
        </section>

        <section>
          <h2>GitLab: Fortifying the Digital Fortress</h2>
          <p>GitLab is not just a tool; it's an ally in the cybersecurity realm. With features like private repositories, RBAC, security scanning, and CI/CD, GitLab fortifies your digital fortress, safeguarding the sanctity of your code.</p>
        </section>

        {/* Additional content sections can be added here */}

        <footer className="module-footer">
          {/* Navigation buttons for moving between modules */}
        </footer>
      </article>
    </div>
  );
  }
export default Module2;

