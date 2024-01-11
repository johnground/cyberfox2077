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
          <h2>Chapter 1: The Genesis Commit</h2>
          <p>
          The year is 2077. The neon-lit skyline of Neo-City blurs into a digital mirage, a testament to the fusion of reality and virtuality. CyberFox, a renowned code sentinel, stands vigil over this sprawling metropolis of data and deceit. With a mind as sharp as her moniker suggests, she is the last line of defense in a world where information is the ultimate currency, and cybersecurity is not just a practice but a lifeline.In cybersecurity, tracking and auditing changes can be as crucial as the security measures themselves. A version control system like Git provides an immutable ledger of modifications, attributions, and the rationale behind each change.
          </p>
          <h3>The Backbone of Cybersecurity</h3>
          <p>In the shadowy corners of this cybernetic domain, the silent war of ones and zeros rages on. CyberFox knows that in this world, the ability to track and audit every change is as crucial as the most sophisticated firewall. It’s the difference between order and chaos, between a functioning society and one vulnerable to the whims of digital marauders. Her tool of choice is not a weapon but a system – Git. In her hands, it transforms into an immutable ledger of history, a record of every battle won and lost in the constant fight to secure the cybernetic realm. Each entry is a tale of its own, a saga of changes made, sources attributed, and the logic behind every decision. <p></p>
          </p>
          <h3>The First Command: git init</h3>
          <p>On this night, a new repository comes to life under CyberFox's watchful eyes. She utters the incantation git init, and with these two simple words, she beckons a new ally into existence. A repository, pristine and awaiting its destiny to become a bastion of progress. It's the first step in a journey of a thousand commits, a blank canvas on which the future of Neo-City will be written.</p>
          <p>This repository will track the development of a project that is rumored to be the key to an evolutionary leap in cybersecurity. It is the harbinger of a new age, an era where every change is documented, every code revision is accounted for, and the rationale behind every alteration is as clear as the neon signs flickering in the endless night.</p>
            <div className="code-block">
            <code> mkdir -p /home/cyberfox/Projects/Genesis && cd /home/cyberfox/Projects/Genesis</code>
            </div>
            <div className="code-block">
            <code> chown -R cyberfox:cyberfox /home/cyberfox/Projects/Genesis</code>
            </div> 
            <div className="code-block">
            <code> git init</code>
            </div> 
            <div className="code-block">
            <code> touch README.md</code>          
            <code> git add README.md</code>
            git commit -m "Initial commit"
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
