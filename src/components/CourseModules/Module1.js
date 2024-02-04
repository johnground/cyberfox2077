import { h } from 'preact';
import '/styles/module.css'; // Ensure this path is correct for your styles

const Module1 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 1: Introduction to Version Control and Git</h1>
      </header>
        <section>
          <section className="content-section cyberpunk-btn">
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
        <section className="content-section cyberpunk-btn">
          <h2>Version Control: The Backbone of Cybersecurity</h2>
          <p><i>(In a dark room, CyberFox integrated with her cybernetic enhancements leans over her screen.)</i></p>
          <p>Tracking and auditing changes in cybersecurity are as vital as the security measures themselves. Git, a version control system, creates an immutable ledger of modifications, attributions, and rationale behind each change.</p>
          <p>In this vast digital expanse, where data and algorithms converge, the silent war rages on... The battlefields are servers, networks, and systems. Git is not just a database of project objects; it's a crucial tool in tracing errors and meticulously tracking changes for cybersecurity professionals.</p>
        </section>
        <section className="content-section cyberpunk-btn">
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
        <section className="content-section cyberpunk-btn">
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

<section className="content-section cyberpunk-btn">
  <h2>Understanding .gitignore</h2>
  <p>In the heart of the cyber key terrain, CyberFox stands before a digital crossroads. Surrounded by a labyrinth of data, she understands the critical role of discernment. Not all files are destined for the vaults of the Git guardian - some are mere echoes of creation, meant to fade away. To navigate this, she summons the arcane knowledge of .gitignore, a digital incantation to veil the unnecessary from the omnipresent gaze of Git.</p>
  <p>With a flourish, she conjures the .gitignore file into existence, her terminal aglow with the dance of creation:</p>
  <div className="code-block">
    <code>
      touch .gitignore<br />
      echo "node_modules/" &gt;&gt; .gitignore<br />
      echo ".env" &gt;&gt; .gitignore<br />
      echo "dist/" &gt;&gt; .gitignore<br />
    </code>
  </div>
  <p>Each line she inscribes serves as a ward, instructing the Git guardian to avert its eyes from the transient: the 'node_modules/' where countless dependencies lie dormant, the '.env' harboring secrets not meant for the uninitiated, and the 'dist/' where the compiled artifacts reside. These are but shadows in the digital realm, necessary for the moment's breath but not for the eternal memory of Git.</p>
  <p>Through the .gitignore, CyberFox weaves a spell of selective memory, allowing only the essence of her creation to be etched into the annals of Git. This act, a blend of foresight and precision, ensures that the repository remains a sanctum of relevance, uncluttered by the ephemeral. It is a testament to her mastery over the digital elements, a dance of code and intention played out upon the canvas of her terminal.</p>
</section>

<section className="content-section cyberpunk-btn">
  <h2>Utilizing .gitattributes</h2>
  <p>In the vast, interconnected web of the digital realm, CyberFox navigates through the cacophony of divergent systems and platforms, each with its own dialect of data representation. Amidst this babel of formats and encodings, she seeks to impose a lexicon of coherence, a unified language for her digital creations. Her tool of choice in this quest for harmony is the arcane .gitattributes file, a powerful artifact that dictates the very nature of data within the Git universe.</p>
  <p>Surrounded by the pulsating glow of her command center, a nexus of neon and digital essence, CyberFox embarks on the ritual of invoking the .gitattributes file:</p>
  <div className="code-block">
    <code>
      touch .gitattributes<br />
      echo "*.txt text eol=lf" &gt;&gt; .gitattributes<br />
      echo "*.jpg binary" &gt;&gt; .gitattributes<br />
    </code>
  </div>
  <p>With each incantation, she molds the very fabric of her repository. Text files are imbued with a singular end-of-line character, 'lf', transcending the chaos of platform-specific line endings. Binary treasures, such as JPEG images, are enshrined as sacrosanct entities, to be passed through the ether unscathed by Git's prying eyes and transforming hands.</p>
  <p>The .gitattributes file becomes a beacon of order, a set of commandments etched in the heart of her repository. It ensures that all who tread its paths—be they fellow coders or machine intellects—speak in a unified tongue, preserving the integrity of the digital tapestry she weaves. CyberFox, in her wisdom, has thus forged a domain where code flows unimpeded by the vagaries of environment and platform, a testament to her vision and mastery over the digital domain.</p>
</section>

<section className="content-section cyberpunk-btn">
  <h2>Committing with Intent: Writing Secure Commit Messages</h2>
  <p><i>(CyberFox scrutinizes the code changes before her, each line a potential vector for chaos.)</i></p>
  <p>In the digital tapestry of code, a well-crafted commit message serves as a beacon of intent, illuminating the path through the dense thicket of changes. It is not merely a description but a ciphered manifesto of purpose, a guidepost for those who traverse the code in times to come.</p>
  <div className="code-block">
    <code>git commit -m 'Seal breach in sector 7G: Patch XSS vulnerability'</code>
  </div>
  <p>This commit message, precise and illuminating, serves as a sentinel of security. 'Seal breach in sector 7G' metaphorically locates the fix in the vast expanse of the project, while 'Patch XSS vulnerability' succinctly communicates the nature of the threat neutralized, offering clarity and insight.</p>
  <p>In the realm where CyberFox reigns, every commit is a testament to vigilance. The guardians of the cyber domain understand that clarity in commit messages is not just about maintaining order; it's a crucial line of defense. These messages act as logs for future cryptanalysts and cyber sentinels, offering them a clear trail to trace the evolution of the code and understand the context of each decision made. This practice ensures that even amidst a storm of updates and enhancements, the integrity and security of the code remain unassailable, safeguarded by the clear intent and forethought imbued in each commit.</p>
</section>

<section className="content-section cyberpunk-btn">
  <h2>Branching: Isolating Development to Preserve Stability</h2>
  <p><i>(In the complex web of code that forms the heart of her digital dominion, CyberFox skillfully conjures a new pathway—a branch that veils her maneuvers from prying eyes.)</i></p>
  <p>In the intricate dance of software development, branching in Git emerges as a masterful stroke, allowing architects of the digital realm to sculpt new features or fortify the code against lurking vulnerabilities. This maneuver, akin to a grandmaster's play in a game of cosmic chess, ensures the sanctity of the mainline—the sacred trunk from which all innovation springs forth—while granting the freedom to explore and experiment in secluded groves.</p>
  <div className="code-block">
    <code>git branch feature-branch<br />
    git checkout feature-branch</code>
  </div>
  <p>With the incantation of 'git branch', CyberFox brings into being a new branch, a parallel reality where the untamed ideas of tomorrow can be nurtured. By stepping into this realm with 'git checkout', she and her cadre of digital artisans can embark on quests of innovation or embark on critical missions to expunge flaws, all without disturbing the tranquil waters of the mainline.</p>
  <p>This strategic partitioning of development efforts allows for a fertile ground where the seeds of future technologies are sown away from the vigilant eyes of the end-user, ensuring that the lifeline of the project—a stable, reliable mainline—remains untouched by the tempest of change. In this way, CyberFox and her allies can weave the tapestry of progress, stitch by intricate stitch, while a bastion of stability guards the legacy of their work, a testament to the foresight and wisdom that govern their domain.</p>
</section>


        <section className="content-section cyberpunk-btn">
        <h2>Monitoring Changes: The Timekeepers of Code</h2>
         <p><i>(With the command center's screens alight, CyberFox watches the history unfold, her gaze piercing through revisions.)</i></p>
  <p>In the ever-shifting landscape of cybercode, the ability to monitor changes and the state of work in progress is crucial. CyberFox, the guardian of digital chronicles, commands her terminal to reveal the story of the code.</p>
  <p>With a swift command, she aligns her focus to the main thread of her narrative:</p>
  <p>“In the realm of code, secrets often hide in plain sight, masked by simplicity. Recall the ancient sequence known by legendary gamers, a code of direction and might. Its power lies dormant, waiting to be unleashed by the wise. Seek the sequence to unlock hidden truths,” CyberFox whispered to herself, her fingers poised above the keys, ready to delve deeper into the repository's secrets.</p>
  <div className="code-block">
  <code>git checkout master</code>
</div>
<p>As CyberFox enters the command, the terminal hums in response, aligning her vantage point with the project's core—the master branch. This branch, revered as the main artery, pulses with the lifeblood of the project's most stable and production-ready version. It is here, in this digital mainline, that the culmination of collective efforts and tested innovations converge, offering a foundation as steadfast as the bedrock of a towering cyber metropolis.</p>
<p>Shifting to the master branch is akin to standing at the heart of the project, where every pulse and rhythm can be felt most profoundly. It is a return to the source, a point of synchronization where CyberFox can review the project's evolutionary journey, integrate new advancements from the branches, or prepare the ground for future forays into the uncharted territories of development.</p>

<div className="code-block">
    <code>
      # View the log of commits<br />
      git log<br /><br />

      # Check the status of the workspace<br />
      git status<br />
    </code>
  </div>
  <p><i>(Before CyberFox, the repository unfolds—a living archive of endeavors, each commit a testament to a moment's decision, each file's state a whisper of ongoing narratives.)</i></p>
  <p>With `git log`, she summons the chronicles of the repository, a cascading stream of commit messages, each bearing the weight of history. These logs, akin to ancient scrolls, unveil the saga of the project—decisions etched in the annals of time, collaborations woven into the fabric of digital destiny. They offer her a glimpse into the very soul of the repository, allowing her to trace the lineage of changes, understand the evolution of the project, and unearth the lore behind each line of code.</p>
  <p>Invoking `git status`, CyberFox peers into the present, the command painting a portrait of the current chapter. Files in staging whisper of imminent transformations; others, untracked, linger in the shadows, awaiting their turn to be woven into the narrative. This real-time tableau provides her with a compass, guiding her actions within the vast digital expanse, ensuring each step is taken with knowledge and intent.</p>
  <p>Together, these commands form CyberFox's map and compass through the temporal and spatial dimensions of the repository. They enable her to navigate the labyrinth of code with precision, armed with the knowledge of what has been and the insight of what is, charting a course through the intricate tapestry of past endeavors and present engagements.</p>
</section>

  <section className="content-section cyberpunk-btn">
  <h2>Chapter 2: Navigating the Merge Conflict Maze</h2>
  <p><i>(In the pulsating heart of the digital cosmos, CyberFox stands at the confluence of converging code streams, her keen eyes fixed on the emerging tempest of a merge conflict.)</i></p>
  <p>With the resolve of a seasoned navigator, she orchestrates a deliberate confluence of divergent data paths within the repository, her actions setting the stage for a calculated clash of code in the cerebral labyrinth of the system.</p>
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
  <p><i>(As the digital winds howl, the system's core illuminates with the stark warning of a merge conflict, two distinct realities colliding in the void of 'feature.txt'.)</i></p>
  <p>In the heart of the conflict, CyberFox encounters the woven tapestry of code, now marred by the discordant echoes of 'Main work' and 'Feature work'. These lines, once parallel threads in the fabric of the project, now vie for dominion in the contested space of the file.</p>
  <div className="code-block">
    <code>
      &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD<br />
      Main work<br />
      =======<br />
      Feature work<br />
      &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch
    </code>
  </div>
  <p>With the precision of a virtuoso, she examines the dueling narratives within 'feature.txt'. Her mind, a crucible of logic and creativity, forges a new path through the discord, melding 'Main work' and 'Feature work' into a unified stream of thought, a synthesis of divergent intentions.</p>
  <p>Her fingers dance over the keys, sculpting a harmonious resolution from the chaos. With the conflict resolved, she commands the digital realm to embrace this new synthesis, her actions weaving the disparate strands of code into a seamless whole:</p>
  <div className="code-block">
    <code>
      git add feature.txt<br />
      git commit -m "Resolve merge conflict: Integrate feature and main work"
    </code>
  </div>
  <p>The repository, once fractured, now pulses with renewed vigor, a testament to CyberFox's mastery over the digital frontier, her ability to navigate and harmonize the most tumultuous of code conflicts.</p>
</section>
  <p><i>(With the precision of a master weaver, CyberFox intertwines the once-divergent strands of code, crafting a tapestry where every thread flows in harmony.)</i></p>
  <p>Her adept resolution of the merge conflict transcends mere reconciliation of code; it is the restoration of unity to the repository's narrative. Through her deft intervention, the digital streams, once bifurcated by differing visions, now converge into a singular, flowing current. This seamless fusion of contributions marks not just the end of conflict but the birth of a new, integrated path forward.</p>
  <p>In the wake of her resolution, the project stands stronger, imbued with the collective wisdom of its contributors. CyberFox, guardian of the codebase, has once more guided her digital odyssey through the intricate labyrinth of version control, preserving the integrity and ensuring the unbroken continuity of the project's journey through the digital expanse.</p>
</section>

<section className="content-section cyberpunk-btn">
  <h2>Advanced Git Commands for Challenging Situations</h2>
  <p>In the labyrinthine expanse of the repository, CyberFox encounters the intricate dance of innovation and stability. To forge a new path for her feature development, she must first synchronize her steps with the `master` branch, the repository's pulsating heart.</p>
  <div className="code-block">
    <code>
      # Fetching the latest updates from the remote repository to ensure she has the most current landscape of the project<br />
      git fetch origin<br /><br />
      
      # Ensuring the 'master' branch is the reference point, aligning her local environment with the repository's central source of truth<br />
      git checkout master<br /><br />
      
      # Creating a new feature branch from 'master', a strategic move to develop new capabilities while preserving the sanctity of the master branch<br />
      git checkout -b feature-branch master
    </code>
  </div>
  <p><i>(With these commands, CyberFox weaves a tapestry of synchronization, ensuring her local domain reflects the most up-to-date version of the remote repository, with 'master' as her guiding light.)</i></p>
  <p>Now in harmony with the project's core, she deftly carves out a new realm for her feature development, a separate but parallel universe where her visions can take form without disturbing the tranquil waters of the 'master' branch.</p>
  <div className="code-block">
    <code>
      # Realigning the narrative of her development history with an interactive rebase, carefully curating the story her commits tell<br />
      git rebase -i HEAD~3<br /><br />
      # Selectively staging changes with precision, choosing which modifications to include in her next commit, much like a sculptor deciding which strokes define their masterpiece<br />
      git add -p
    </code>
  </div>
  <p>Employing these advanced techniques, CyberFox not only navigates but masters the complex seas of the Git environment. Her actions reflect a deep understanding of how to mold the repository's history and content to accommodate emerging innovations while steadfastly preserving the foundational integrity that underpins the 'master' branch.</p>
</section>
<section className="content-section cyberpunk-btn">
  <h2> Stashing Changes for a Clean Workspace</h2>
  <p>Amidst the neon glow of her digital workshop, CyberFox stands at the precipice of a groundbreaking discovery. But an unexpected message from the "Domain" demands her immediate attention, compelling her to pivot without losing the essence of her current innovation.</p>
  <div className="code-block">
    <code>
      # Preserving the current state of work without committing<br />
      git stash<br /><br />
      
      # Navigating to address the urgent task<br />
      git checkout urgent-fix<br /><br />
      
      # Applying stashed changes to resume work<br />
      git stash pop
    </code>
  </div>
  <p><i>(With a swift motion, CyberFox stashes her work, her digital canvas momentarily cleansed, preserving the integrity of her current innovation while she attends to the call of duty.)</i></p>
  <p>By stashing her changes, she creates a temporal vault, a sanctuary where her work can reside untouched by the tides of immediate demands. This maneuver allows her the agility to switch contexts with the grace of a seasoned time-traveler, ensuring no spark of genius is lost to the winds of urgency.</p>
  <p>Once the pressing matter is resolved, CyberFox retrieves her stashed masterpiece with `git stash pop`, seamlessly weaving her previous work back into the fabric of her current task. This strategic command restores her digital tapestry to its former glory, enabling a fluid transition back to her original endeavor.</p>
  <p>Through the adept use of stashing, CyberFox demonstrates the art of balancing immediate demands with long-term innovation, a skill paramount for the guardians of the digital frontier.</p>
</section>
<section className="content-section cyberpunk-btn">
  <h2>Pull Requests: The Gateway to Collaborative Innovation</h2>
  <p>Within the sprawling digital landscape of the Domain, CyberFox stands as a beacon of collaborative ingenuity. Her latest venture: a feature so revolutionary it demands the collective prowess of her fellow artisans. The time has come to merge her vision with the Domain's master narrative.</p>
  <div className="code-block">
    <code>
      # Pushing the feature branch to the remote repository<br />
      git push origin feature-branch<br /><br />
      
      # Initiating a pull request via the Domain's collaboration platform<br />
      # Note: The actual creation of a pull request may vary based on the platform used and is usually done through a web interface
    </code>
  </div>
  <p><i>(With the push of her feature branch to the remote repository, CyberFox lays the foundation for a digital symposium, inviting scrutiny, collaboration, and enhancement from her peers.)</i></p>
  <p>By initiating a pull request, she opens a portal to the Domain's collective wisdom, a crucible where ideas are tempered, refined, and ultimately forged into the annals of the project. This process is not just about code integration; it's a rite of passage for every contribution, subjecting it to the critical eyes of guardians who uphold the Domain's standards of excellence and innovation.</p>
  <p>Through discussion, review, and collaboration within the pull request, CyberFox and her peers engage in a meticulous dance of intellect and creativity, ensuring that each line of code not only functions but thrives within the ecosystem of the project. This is where the solitary journey of creation meets the collective saga of the Domain, birthing innovations that resonate with the harmonious chorus of collaborative genius.</p>
  <p>The pull request, thus, stands as a testament to the Domain's ethos of unity and progress, a gateway through which every new feature must pass to be woven into the project's ever-evolving tapestry.</p>
</section>
<section className="content-section cyberpunk-btn">
  <h2>Reverting Changes to Ensure Code Integrity</h2>
  <p>In the ever-evolving narrative of the Domain's digital odyssey, CyberFox encounters an anomaly—a recent merge that threatens the delicate balance of the codebase. To preserve the sanctity of the Domain's core mission, she must undo the changes, restoring harmony to the digital realm.</p>
  <div className="code-block">
    <code>
      # Identifying the commit to revert<br />
      git log<br /><br />
      
      # Reverting the disruptive commit<br />
      git revert &lt;commit-hash&gt;<br />
    </code>
  </div>
  <p><i>(With a discerning eye, CyberFox sifts through the annals of commits, pinpointing the rogue wave that disrupted the serene flow of code.)</i></p>
  <p>Employing the `git revert` command, she delicately excises the errant commit, weaving the threads of time and code to realign with the Domain's intended course. This action not only undoes the changes but also preserves the history of the journey, acknowledging the misstep while maintaining the integrity of the collective narrative.</p>
  <p>Through this calculated maneuver, CyberFox reinforces the Domain's resilience, ensuring that each contributor's odyssey—no matter how circuitous—contributes to the strength and stability of the whole. Reverting changes becomes not just a technical task but a ritual of restoration, a reaffirmation of the Domain's commitment to code integrity and collaborative progress.</p>
</section>

<section className="content-section cyberpunk-btn">
    <h2>Epilogue: CyberFox's Ascendancy in Version Control</h2>
    <p><i>(In the glow of the terminal, a narrative of resolved conflicts and seamless merges illuminates the dim chamber.)</i></p>
    <p>CyberFox stands sentinel in the digital realm, her knowledge of Git her greatest weapon. With each command, she weaves the future from the past, a master of digital time and space.</p>
    <p>Gazing into the luminescent streams of code, CyberFox contemplates a unique hash, a cryptic key from a time of pivotal change. "In the depths of history lies knowledge once known, now obscured," she muses. "To unearth the secrets of the past, one must venture to the point where paths diverged, where the essence of a lost juncture lingers."</p>
    <p><i>(As the streams of data slow to a gentle flow, the saga pauses, the journey far from over.)</i></p>
</section>


  </div>
  );
};

export default Module1;