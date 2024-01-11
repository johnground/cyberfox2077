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
      <p><i>(In a dark room, an intense figure with cybernetic enhancements leans over their screen.)</i></p>
      <p>Tracking and auditing changes in the realm of cybersecurity are as vital as the security measures themselves. Version control systems like Git create an immutable ledger of modifications, attributions, and rationale behind each change.</p>
      <h3><b>"The Backbone of Cybersecurity"</b></h3>
      <p><i>(A shadowy figure steps out from the darkness. It is the embodiment of cybersecurity.)</i></p>
      <p>In this vast digital expanse, where data and algorithms converge, the silent war rages on... The battlefields are our servers, networks, and systems. Git is infact a database of the objects related to your project, in our environments as Cyber Security professionals we need to meticuously track changes and trace errors to provide deeper meaning into o</p>
    </section>

    <section>
      <h2><b>Installing Git: A Step-by-Step Guide</b></h2>
      <p>Proper setup of Git is crucial to secure your version control environment...</p>
      <div className="code-block">
        <code>sudo apt-get install git<br /></code>
      </div>
      <p>In our environment we have already installed git via Docker. However, after a successful installation, configure your global username and email to personalize your Git environment. It can whatever is your preference, even the email can be made up. Our CyberFox hacker is using her handle as a way to uniquely identify her identity in the system</p>
      <div className="code-block">
        <code>sudo git config --global user.name CyberFox<br />
          sudo git config --global user.email CyberFox@2077.git<br /></code>
      </div>
    </section>

    <section>
      <h2><b>Chapter 1: The Genesis Commit</b></h2>
      <h3>The First Command: git init</h3>
      <p><i>(A figure stands in an empty room, surrounded by darkness. They reach up and flip a switch on the wall.</i></p>
      <p>On this night, a new repository comes to life under CyberFox's watchful eyes...</p>
      <div className="code-block">
        <code><b>mkdir -p</b> /home/cyberfox/Projects/Genesis<br />
          && cd /home/cyberfox/Projects/Genesis<br /></code>
        <code> chown -R cyberfox:cyberfox /home/cyberfox/Projects/Genesis<br /></code>
        <code><b>git init</b><br /></code>
        <code>touch README.md<br /></code>
        <code>git add README.md<br />
          git commit -m "Initial commit"</code>
      </div>
      <p>This initializes a new Git repository locally, preparing the way for tracking and managing project files.</p>
    </section>

    <section>
      <h2>Committing with Intent: Writing Secure Commit Messages<b></b></h2>
      <p>A well-crafted commit message provides context and clarity to the changes made...</p>
      <div className="code-block">
        <code><i>"git commit -m "Fixed CSRF vulnerability in authentication flow"</i></code>
      </div>
    </section>

    <section>
      <h2>Branching: Isolating Development to Preserve Stability<b></b></h2>
      <p><i>(A branch splits off from the main trunk of a tree, representing the concept of branching in version control.)</i></p>
      <p>Branching allows you to work on different features or fixes without affecting the stable version of your project...</p>
    </section>
  </article>
</div>
  );
};

export default Module1;