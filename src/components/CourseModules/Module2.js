import { h } from 'preact';
import '/styles/module2.css'; // Ensure this path is correct for your styles

const Module2 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 2: GitLab Essentials in the Cyber Realm</h1>
      </header>
      
      <article className="content">
        <section>
          <h2>The Transition to GitLab: CyberFox's Strategic Shift</h2>
          <p><i>(In the neon-glow of her command center, CyberFox ponders the shift from GitHub to GitLab.)</i></p>
          <p>For CyberFox, moving from GitHub to GitLab isn't just about using a different tool; it's a tactical evolution in her cyber journey. GitLab, with its open-source ethos and integrated DevOps capabilities, represents a new frontier in version control and collaboration. This strategic shift gears her towards a more comprehensive platform, enhancing her cyber operations.</p>
        </section>

        <section>
          <h2>Orchestrating GitLab in the Docker Universe</h2>
          <p>Deploying GitLab within Docker is akin to CyberFox launching a spacecraft into the vast DevOps cosmos. This step is pivotal in her journey to master the cyber universe.</p>
          <p><i>(A holographic terminal materializes before her, displaying the Docker commands.)</i></p>
          <ol>
            <li>Verify Docker's presence in the system.</li>
            <li>Pull the GitLab Docker image:</li>
            <div className="code-block">
              <code>docker pull gitlab/gitlab-ce:latest</code>
            </div>
            <li>Launch the GitLab container:</li>
            <div className="code-block">
            <code>
  docker run --detach \<br />
  --hostname gitlab.cyberfox.com \<br />
  --publish 443:443 --publish 80:80 --publish 222:22 \<br />
  --name gitlab \<br />
  --restart always \<br />
  --volume /srv/gitlab/config:/etc/gitlab \<br />
  --volume /srv/gitlab/logs:/var/log/gitlab \<br />
  --volume /srv/gitlab/data:/var/opt/gitlab \<br />
  gitlab/gitlab-ce:latest
</code>
</div>
<li>Access GitLab at <code>http://localhost/users/sign_in</code>.</li>
</ol>
</section>
    <section>
      <h2>Initial Access: CyberFox's Command Codes</h2>
      <p>The first login to GitLab is a crucial moment. Navigate to the GitLab instance, using "root" as the username, and set a secure password. This password is the digital key to the kingdom, a symbol of access and control in the cyber realm.</p>
    </section>

    <section>
      <h2>Navigating the Cyber Labyrinth: GitLab Troubleshooting</h2>
      <p><i>(The screens display diagnostic data as CyberFox troubleshoots.)</i></p>
      <p>CyberFox's journey is not without its challenges. Here are steps to overcome common obstacles:</p>
      <ul>
        <li>Confirm Docker's active status.</li>
        <li>Ensure the correct GitLab image: <code>gitlab/gitlab-ce:latest</code>.</li>
        <li>Check for port conflicts (443, 80, 22).</li>
        <li>Analyze Docker container logs for insights.</li>
        <li>Verify the correct mounting of volumes.</li>
      </ul>
      <p>For persistent issues, the GitLab community serves as an alliance of knowledge.</p>
    </section>

    <section>
      <h2>Strengthening the Cyber Bastion: GitLab's Capabilities</h2>
      <p>GitLab is more than a platform; it's a fortress in the cyber landscape. Its features like private repositories, Role-Based Access Control (RBAC), security scanning, and CI/CD pipelines fortify CyberFox's digital domain, safeguarding her code's sanctity.</p>
    </section>

    <section>
      <h2>The Art of Cyber Warfare: Mastery of GitLab's CI/CD</h2>
      <p><i>(The dashboard becomes a strategic battle map as CyberFox delves into GitLab's CI/CD tools.)</i></p>
      <p>These tools are the front line of her cyber warfare, automating code testing to ensure resilience and strength. She configures her .gitlab-ci.yml, setting stages and jobs for testing and deployment, fortifying her code against vulnerabilities.</p>
    </section>

    <section>
      <h2>Securing the Digital Frontier with GitLab CI/CD</h2>
      <p>GitLab's CI/CD pipelines are akin to the high walls and guarded gates of a digital fortress. They act as steadfast guardians, automatically scrutinizing code for weaknesses and vulnerabilities, ensuring only the most robust and secure code is deployed into the production environment.</p>
</section>
    <section>
      <h2>The Silent Sentinels: GitLab's Private Repositories</h2>
      <p><i>(A series of encrypted vaults emerge, symbolizing GitLab's private repositories.)</i></p>
      <p>For CyberFox, private repositories in GitLab are akin to covert vaults, accessible only to those bearing the right digital keys. These sanctuaries of code are crucial for conducting clandestine cyber operations and safeguarding sensitive data.</p>
    </section>

    <section>
      <h2>Mastering the Cyber Hunt: Leveraging Advanced GitLab Features</h2>
      <p><i>(Immersed in a virtual reality interface, CyberFox explores GitLab's advanced features.)</i></p>
      <p>As a cyber threat hunter, mastering these features is akin to refining her arsenal. Advanced issue tracking, merge request approvals, and extensive logging capabilities are vital tools in her quest to maintain digital supremacy and operational efficiency.</p>
    </section>

    <footer className="module-footer">
      <p><i>(As the module concludes, CyberFox reflects on her journey, ready for the challenges ahead in the cyber realm.)</i></p>
    </footer>
  </article>
</div>
);
};

export default Module2;
