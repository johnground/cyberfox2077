import { h } from 'preact';
import '/styles/styles.css'; // Ensure this path is correct for your styles

const Module1 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 1: Introduction to Version Control for Cybersecurity</h1>
      </header>
      
      <div className="content">
        <section className="content-section">
          <h2>Version Control: What Every Cybersecurity Professional Should Know</h2>
          <p>Welcome to Module 1 of our course on Version Control for Cybersecurity Professionals. 
          In this module, we'll explore the fundamental concepts of version control and understand 
          its crucial role in cybersecurity practices.</p>
        </section>

        <section className="content-section">
          <h2>Why Version Control Matters</h2>
          <p>Version control is not just for developers; it's a valuable tool for cybersecurity 
          experts too. We'll discuss how version control helps you track changes in security 
          policies, configurations, and incident response procedures. Learn how it enhances 
          collaboration among security teams.</p>
        </section>

        <section className="content-section">
          <h2>Getting Started with Git</h2>
          <p>If you're new to Git, don't worry! We'll introduce you to this popular version control 
          system. Git's simplicity and power make it a perfect fit for managing security-related 
          code, scripts, and configurations.</p>
        </section>

        <section className="content-section">
          <h2>Installing GitLab with Docker</h2>
          <p>Now, let's explore how to set up a GitLab instance using Docker. GitLab provides a 
          comprehensive platform for managing your security projects, including code repositories, 
          issue tracking, and continuous integration.</p>
          <ol>
            <li>Install Docker on your system.</li>
            <li>Pull the GitLab Docker image: <code>docker pull gitlab/gitlab-ce:latest</code></li>
            <li>Run the GitLab container with the necessary configuration:</li>
            <pre>
{`docker run --detach \\
  --hostname gitlab.example.com \\
  --publish 443:443 --publish 80:80 --publish 22:22 \\
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
          <p>Once your GitLab instance is up and running, you will need to set up the initial root password for the root user...</p>
          {/* Include the rest of the steps for setting up the GitLab password */}
        </section>

        <section className="content-section">
          <h2>Troubleshooting</h2>
          <p>If you encounter any issues while setting up the GitLab container with Docker, here are some troubleshooting steps...</p>
          {/* Include the troubleshooting steps */}
        </section>

        <section className="content-section">
          <h2>GitLab's Relevance to Cybersecurity</h2>
          <ul>
            <li>Private Repositories: GitLab allows you to create private repositories, which can only be accessed by authorized users.</li>
            <li>Role-Based Access Control (RBAC): GitLab supports RBAC...</li>
            {/* Include the rest of the GitLab's relevance to cybersecurity */}
          </ul>
        </section>

        {/* Additional content sections would go here */}

        <footer className="module-footer">
          {/* Navigation buttons would go here */}
        </footer>
      </div>
    </div>
  );
};

export default Module1;


