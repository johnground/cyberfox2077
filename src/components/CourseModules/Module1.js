import { h } from 'preact';
import '/styles/module1.css'; // Ensure this path is correct for your styles

const Module1 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 1: Introduction to Version Control and Git</h1>
      </header>
      <article className="content">
         <section>
          <h2>The Awakening of CyberFox</h2>
          <p><i>(In a futuristic command center, CyberFox stands poised before an array of screens.)</i></p>
          <p>With a swift, calculated keystroke, CyberFox invokes the command that will grant her elevated access:</p>
          <div className="code-block">
            <code>sudo su</code>
          </div>
          <p>The system, recognizing her authority, yields to her command, elevating her privileges. In this realm, she is more than a user; she is a guardian of the system, a role bestowed upon her by System.git, the sentient AI overseeing the cyber domain.</p>
          <p><i>(As her access level ascends, the screens flicker, acknowledging her newfound control.)</i></p>
          <p>With the full might of administrative privileges at her command, CyberFox prepares to delve into the intricacies of Git, armed with the power to shape the digital landscape.</p>
        </section>
        <section>
          <h2>Version Control: The Backbone of Cybersecurity</h2>
          <p><i>(In a dark room, CyberFox integrated with her cybernetic enhancements leans over her screen.)</i></p>
          <p>Tracking and auditing changes in cybersecurity are as vital as the security measures themselves. Git, a version control system, creates an immutable ledger of modifications, attributions, and rationale behind each change.</p>
          <p><i>(A shadowy figure, the embodiment of cybersecurity, steps out from the darkness.)</i></p>
          <p>In this vast digital expanse, where data and algorithms converge, the silent war rages on... The battlefields are servers, networks, and systems. Git is not just a database of project objects; it's a crucial tool in tracing errors and meticulously tracking changes for cybersecurity professionals.</p>
        </section>
        <section>
          <h2>Installing Git: A Step-by-Step Guide</h2>
          <p>Proper setup of Git is crucial to secure your version control environment...</p>
          <div className="code-block">
            <code>sudo apt-get install git</code>
          </div>
          <p>While Git is pre-installed in our Docker environment, configuring your global username and email is essential to personalize your Git setup. CyberFox, our cyber hacker, uses her handle to uniquely identify her presence in the system.</p>
          <div className="code-block">
            <code>git config --global user.name "CyberFox"<br />
                git config --global user.email "CyberFox@2077.git"</code>
          </div>
        </section>
        <section>
  <h2>Chapter 1: The Genesis Commit</h2>
  <h3>The First Command: git init</h3>
  <p><i>(A cyberneticly enhanced figure stands in an empty room, illuminated only by the glow of a terminal. They effortsly key in commands.)</i></p>
  <p>On this night, under CyberFox's watchful eyes, a new repository named 'Genesis' comes to life...</p>
  <div className="code-block">
    <code>
      mkdir -p /home/cyberfox/Projects/Genesis<br />
      cd /home/cyberfox/Projects/Genesis<br />
      chown -R cyberfox:cyberfox /home/cyberfox/Projects/Genesis<br />
      git init<br />
      touch README.md<br />
      git add README.md<br />
      git commit -m "Initial commit"<br />
    </code>
  </div>
  <p>CyberFox meticulously initializes a new Git repository, crafting the very foundation of her digital odyssey.</p>
  <p>To affirm her actions, she invokes the sacred scrolls of Git:</p>
  <div className="code-block">
    <code>
      git status<br />
      git log
    </code>
  </div>
  <p>The terminal responds, displaying the current status of her repository and a log of her initial commit. Each line is a testament to her foresight and precision, a digital footprint in the sands of code.</p>
</section>

        <section>
  <h2>Understanding .gitignore</h2>
  <p>In the heart of the cyber key terrain, CyberFox encounters a labyrinth of data, necessitating strategic oversight. She knows that not all files are meant for the eyes of the Git guardian. To filter the essential from the ephemeral, she crafts a .gitignore file, a digital sieve for her projects.</p>
  <p>Seated at her terminal, her fingers dance across the keys, conjuring the .gitignore file into existence:</p>
  <div className="code-block">
    <code>
      touch .gitignore<br />
      cat &lt;&lt;EOL &gt;.gitignore<br />
      node_modules/<br />
      .env<br />
      dist/<br />
      EOL
    </code>
  </div>
  <p>With each line, she weaves a pattern, instructing Git to disregard transient artifacts like build directories and environment configurations. These are the shadows of the digital world, necessary but not to be tracked.</p>
  <p>The .gitignore file stands as a testament to her skill, ensuring that only the vital elements of her cyber endeavors are committed to the annals of Git. It's a dance of precision and foresight, played out on the canvas of her terminal.</p>
</section>

        <section>
  <h2>Utilizing .gitattributes</h2>
  <p>In the depths of the digital realm, CyberFox encounters a challenge of harmony and coherence. Different environments and systems whisper in a babel of formats and encodings. To bring order, she turns to the .gitattributes file, her tool for enforcing uniformity in her codebase.</p>
  <p>At her command center, amidst a symphony of neon and bytes, she commences the creation of the .gitattributes file:</p>
  <div className="code-block">
    <code>
      touch .gitattributes<br />
      cat &lt;&lt;EOF &gt;.gitattributes<br />
      *.txt text eol=lf<br />
      *.jpg binary<br />
      EOF
    </code>
  </div>
  <p>With each directive, CyberFox shapes the behavior of Git. Text files are now aligned with a uniform end-of-line character, ensuring consistency regardless of the platform. Binary files like JPEG images are marked, treated as opaque data chunks by Git, immune to alteration.</p>
  <p>This strategic configuration of .gitattributes ensures that all collaborators, whether human or AI, interface with the repository in a unified manner. It's a testament to CyberFox's foresight and technical acumen, as she architects a repository that stands resilient in the face of diversity and change.</p>
</section>

        <section>
          <h2>Committing with Intent: Writing Secure Commit Messages</h2>
          <p><i>(CyberFox scrutinizes the code changes before her, each line a potential vector for chaos.)</i></p>
          <p>A well-crafted commit message transcends mere description; it's an encrypted signal of intent through the noise of changes.</p>
          <div className="code-block">
            <code>git commit -m 'Seal breach in sector 7G: Patch XSS vulnerability'</code>
          </div>
          <p>For the guardians of cyber, clarity in every commit is paramount, each message a log for future cryptanalysts to trace and understand.</p>
        </section>
        <section>
          <h2>Branching: Isolating Development to Preserve Stability</h2>
          <p><i>In the labyrinth of code, CyberFox deftly creates a new conduit, a branch unseen by the adversaries.)</i></p>
          <p>Branching in Git allows developers to work on new features or fixes without impacting the stable version of the project. It's a strategic move, much like a chess game, ensuring the project's integrity while exploring new advancements or addressing issues.</p>
          <div className="code-block">
            <code>git branch feature-branch<br />
            git checkout feature-branch</code>
          </div>
          <p>This approach facilitates parallel development streams, enabling CyberFox and her team to innovate rapidly while maintaining a stable mainline.</p>
        </section>
        <section>
  <h2>Monitoring Changes: The Timekeepers of Code</h2>
  <p><i>(With the command center's screens alight, CyberFox watches the history unfold, her gaze piercing through revisions.)</i></p>
  <p>In the ever-shifting landscape of cybercode, the ability to monitor changes and the state of work in progress is crucial. CyberFox, the guardian of digital chronicles, commands her terminal to reveal the story of the code.</p>
  <p>With a swift command, she aligns her focus to the main thread of her narrative:</p>
  <div className="code-block">
    <code>git checkout master</code>
  </div>
  <p>The terminal obeys, shifting her perspective to the main artery of the project's lifeblood.</p>
  <div className="code-block">
    <code>
      # View the log of commits<br />
      git log<br /><br />

      # Check the status of the workspace<br />
      git status<br />
    </code>
  </div>
  <p><i>(Lines of commitment, files in flux, the relics of past decisions all laid bare before her.)</i></p>
  <p>The logs and status reports become CyberFox's map through time and space within the repository. Each entry, a marker in the continuum; each status, a signpost in the digital expanse. They guide her through the chronicles of code, allowing her to navigate the intricate tapestry of past and present actions.</p>
</section>

<section>
  <h2>Chapter 2: Navigating the Merge Conflict Maze</h2>
  <p><i>(Amidst a flurry of digital fragments, CyberFox faces a clash of code, a merge conflict in the heart of the system.)</i></p>
  <p>Intent on harmonizing the divergent paths of data, CyberFox strategically manipulates the code in two branches, setting the stage for a deliberate collision.</p>
  <div className="code-block">
    <code>
      git checkout feature-branch<br />
      echo "Feature work" &gt; feature.txt<br />
      git add feature.txt<br />
      git commit -m "Add feature work"<br /><br />
      
      git checkout master<br />
      echo "Main work" &gt; feature.txt<br />
      git add feature.txt<br />
      git commit -m "Add main work"<br /><br />

      git merge feature-branch
    </code>
  </div>
  <p><i>(The systems alert to a conflict, two streams of code converging yet resisting integration.)</i></p>
  <p>With a masterful touch, CyberFox delves into the 'feature.txt'. Inside, she finds the battlefield:</p>
  <div className="code-block">
    <code>
      &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD<br />
      Main work<br />
      =======<br />
      Feature work<br />
      &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch
    </code>
  </div>
  <p>She scrutinizes the conflicting lines – remnants of parallel realities. With deft precision, she weaves a new narrative, blending the 'Main work' and 'Feature work' into a cohesive tapestry.</p>
  <p>After refining the text, she commands the system to accept this newfound harmony:</p>
  <div className="code-block">
    <code>
      # Edit the file to merge both contributions<br />
      git add feature.txt<br />
      git commit -m "Resolve merge conflict"
    </code>
  </div>
  <p><i>(The code now flows uninterrupted, a seamless fusion of two once-disparate paths.)</i></p>
  <p>With the conflict resolved, CyberFox has once again navigated the complex web of version control, ensuring the integrity and continuity of the digital odyssey.</p>
</section>


        
<section>
  <h2>Advanced Git Commands for Challenging Situations</h2>
  <p>Within the intricate network of the repository, CyberFox discovers a need to create a new feature branch based on the `master` branch, the central vein of the project's lifeblood.</p>
  <div className="code-block">
    <code>
      # Fetching the latest updates from the remote repository<br />
      git fetch origin<br /><br />
      
      # Ensuring the 'master' branch is the reference point<br />
      git checkout master<br /><br />
      
      # Creating a new feature branch from 'master'<br />
      git checkout -b feature-branch master
    </code>
  </div>
  <p><i>(With her commands, CyberFox ensures that her local environment mirrors the current state of the remote repository, particularly the 'master' branch.)</i></p>
  <p>Having aligned her workspace to the central source of truth, she deftly branches off, creating a new realm for her feature development while maintaining the integrity of the 'master' branch.</p>
  <div className="code-block">
    <code>
      # Realigning history with interactive rebase<br />
      git rebase -i HEAD~3<br /><br />

      # Selectively staging changes<br />
      git add -p
    </code>
  </div>
  <p>Through these advanced maneuvers, CyberFox demonstrates her adeptness at navigating the complex Git environment, skillfully shaping the codebase to accommodate new innovations while preserving its core stability.</p>
</section>
        <section>
          <h2>Epilogue: CyberFox's Ascendancy in Version Control</h2>
          <p><i>(In the glow of the terminal, a narrative of resolved conflicts and seamless merges illuminates the dim chamber.)</i></p>
          <p>CyberFox stands sentinel in the digital realm, her knowledge of Git her greatest weapon. With each command, she weaves the future from the past, a master of digital time and space.</p>
          <p><i>(As the streams of data slow to a gentle flow, the saga pauses, the journey far from over.)</i></p>
        </section>

        <footer className="module-footer">
          
        </footer>
      </article>
    </div>
  );
};

export default Module1;