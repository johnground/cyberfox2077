import { h } from 'preact';
import '/styles/module1.css'; // Make sure this path is correct for your styles

const Module1 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 1: Introduction to Version Control and Git</h1>
      </header>
      
      <article className="content">
        
        <section>
          <h2>Version Control: The Backbone of Cybersecurity</h2>
          <p>
            In cybersecurity, tracking and auditing changes can be as crucial as the security measures themselves. A version control system like Git provides an immutable ledger of modifications, attributions, and the rationale behind each change.
          </p>
          <div className="code-block">
            <code>git init</code>
          </div>
          <p>
            This initializes a new Git repository locally, preparing the way for tracking and managing project files.
          </p>
        </section>

        <section>
          <h2>Installing Git: A Step-by-Step Guide</h2>
          <p>
            Proper setup of Git is crucial to secure your version control environment. We will guide you through the installation process, including configuring Git to work with secure shell (SSH) for encrypted network communication when pushing and pulling from remote repositories.
          </p>
          <div className="code-block">
            <code>sudo apt-get install git</code>
          </div>
          <p>
            After installation, configure your global username and email to personalize your Git environment.
          </p>
          <div className="code-block">
            <code>
              git config --global user.name "Your Name"<br />
              git config --global user.email "your_email@example.com"
            </code>
          </div>
        </section>

        <section>
          <h2>Committing with Intent: Writing Secure Commit Messages</h2>
          <p>
            A well-crafted commit message provides context and clarity to the changes made. This is especially important in a cybersecurity context where changes might be scrutinized during audits.
          </p>
          <div className="code-block">
            <code>git commit -m "Fixed CSRF vulnerability in authentication flow"</code>
          </div>
        </section>

        <section>
          <h2>Branching: Isolating Development to Preserve Stability</h2>
          <p>
            Branching allows you to work on different features or fixes without affecting the stable version of your project. This is a best practice in cybersecurity, where changes need to be thoroughly tested before deployment.
          </p>
          <div className="code-block">
            <code>
              git branch feature-x<br />
              git checkout feature-x
            </code>
          </div>
        </section>

        <section>
          <h2>Remote Repositories: Collaboration and Security</h2>
          <p>
            Remote repositories enable collaboration. When setting up remotes, secure your connections and control access to maintain the integrity of your code.
          </p>
          <div className="code-block">
            <code>
              git remote add origin ssh://git@example.com:repository.git<br />
              git push -u origin master
            </code>
          </div>
        </section>

        <section>
          <h2>Wrap Up and Practice</h2>
          <p>
            With the basics covered, it's time to apply this knowledge. Clone the provided repository, inspect its history, and identify any commits that may have introduced security flaws.
          </p>
          <div className="code-block">
            <code>git clone ssh://git@example.com:SecurityRepo.git</code>
          </div>
        </section>

        <footer>
          <button>Previous Module</button>
          <button>Next Module</button>
        </footer>

      </article>
    </div>
  );
};

export default Module1;
