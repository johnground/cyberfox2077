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

        {/* Section: The Art of Cyber War with GitLab */}
<section>
  <h2>The Art of Cyber War with GitLab</h2>
  <p><i>(CyberFox, with a determined look, scans through GitLab's dashboard.)</i></p>
  <p>In the shadowy realm of cyber warfare, knowledge and preparation are keys to victory. GitLab's continuous integration and deployment tools act as the front line, automating code testing to ensure only the strongest code survives.</p>
  <p>Command Line Steps:</p>
  <div className="code-block">
    <code>
      # Access GitLab's CI/CD settings<br />
      echo "Navigate to your GitLab project -&gt; Settings -&gt; CI / CD"<br />
      <br />
      # Set up a basic pipeline<br />
      echo "Create a .gitlab-ci.yml file in your project's root directory"<br />
      echo "Define stages and jobs for testing and deployment"<br />
    </code>
  </div>
</section>

{/* Section: Securing the Perimeter with GitLab CI/CD */}
<section>
  <h2>Securing the Perimeter with GitLab CI/CD</h2>
  <p><i>(A visualization of digital fortifications appears, representing GitLab's CI/CD pipelines.)</i></p>
  <p>GitLab's CI/CD pipelines are like high walls and guarded gates of a fortress. They automatically test code for vulnerabilities, ensuring only secure code is deployed to production.</p>
  <p>Command Line Steps:</p>
  <div className="code-block">
    <code>
      # Configure security scanning in your pipeline<br />
      echo "Add security scanning jobs in your .gitlab-ci.yml"<br />
      echo "Use GitLab's built-in security templates for SAST, DAST, and Dependency Scanning"<br />
    </code>
  </div>
</section>

{/* Section: The Silent Guardians: GitLab's Private Repositories */}
<section>
  <h2>The Silent Guardians: GitLab's Private Repositories</h2>
  <p><i>(A series of secured vaults appear, symbolizing GitLab's private repositories.)</i></p>
  <p>Private repositories in GitLab are like secret vaults, accessible only to those with the right clearance.</p>
  <p>Command Line Steps:</p>
  <div className="code-block">
    <code>
      # Create a new private repository in GitLab<br />
      echo "Go to GitLab -&gt; New project -&gt; Visibility Level: Private"&lt;br /&gt;<br />
      <br />
      # Clone the private repository to your local machine<br />
      echo "git clone [your-private-repo-link]"&lt;br /&gt;<br />
    </code>
  </div>
</section>

{/* Section: Mastering the Cyber Hunt: Advanced GitLab Features */}
<section>
  <h2>Mastering the Cyber Hunt: Advanced GitLab Features</h2>
  <p><i>(CyberFox adjusts her virtual reality headset, diving deeper into GitLab's advanced features.)</i></p>
  <p>Mastering GitLab's advanced features is akin to honing one 's weapons for a cyber threat hunter. Features like advanced issue tracking, merge request approvals, and extensive logging capabilities are essential tools.</p>

  <p>Command Line Steps:</p>
  <div className="code-block">
    <code>
      # Utilize advanced issue tracking<br />
      echo "Navigate to GitLab project -&gt; Issues -&gt; Create new issue with detailed descriptions and labels"&lt;br /&gt;<br />
      <br />
      # Implement merge request approvals<br />
      echo "Go to GitLab project -&gt; Settings -&gt; Merge requests -&gt; Enable 'Merge request approvals'"&lt;br /&gt;<br />
      echo "Define the number of necessary approvals and eligible approvers"&lt;br /&gt;<br />
      <br />
      # Set up extensive logging<br />
      echo "In your project's .gitlab-ci.yml, configure jobs to output detailed logs"&lt;br /&gt;<br />
      echo "Utilize GitLab's logging features to capture and review deployment and operational logs"&lt;br /&gt;<br />
    </code>
  </div>
</section>


        <footer className="module-footer">
          {/* Navigation buttons for moving between modules */}
        </footer>
      </article>
    </div>
  );
  }
export default Module2;

