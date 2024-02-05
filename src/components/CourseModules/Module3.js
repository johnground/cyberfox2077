import { h } from 'preact';
import '/styles/module.css'; // Make sure to provide the correct path to your CSS file

const Module3 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 3: Advanced Git Techniques - The CyberFox Chronicles</h1>
      </header> 

      <section className="content-section cyberpunk-btn">
        <h2>Decoding the Git Matrix: Rebasing Reality</h2>
        <p><i>(Amid the ethereal glow of her command nexus, CyberFox weaves through the strands of time within the Git Matrix, her fingers orchestrating a symphony of commands that reshape the chronicles of her digital dominion.)</i></p>
        <p>In the arcane world of code, the mastery of time's flow is paramount. With the mystical art of Git rebase, CyberFox commands the very essence of the repository's timeline, sculpting a narrative that aligns with the destined path of her cybernetic saga. This powerful rite allows her to reorder the sequence of events, merge timelines, and refine the tale her repository tells to those who dare to look upon its history.</p>
        <div className="code-block">
          <code>git rebase HEAD</code>
        </div>
        <p><i>(The terminal before her transforms into a portal, offering glimpses of alternate realities where each commit's fate hangs in balance, awaiting the touch of her will to redefine their essence.)</i></p>
        <p>As CyberFox delves into the rebase session, she encounters the nascent echoes of her project's inception. Each commit, though few, is a potent force in the unfolding narrative of her creation. With meticulous care and strategic foresight, she guides these fledgling commits, ensuring their alignment with the initial vision of her cybernetic odyssey. This act of rebasing, especially at such an embryonic stage of the project, is a testament to her foresight and mastery over the digital continuum, sculpting the repository's history with the precision of a seasoned chronomancer.</p>
      </section>


      <section className="content-section cyberpunk-btn">
        <h2>Convergence of Code Streams: The Art of the Merge</h2>
        <p><i>(Amidst a symphony of pulsating data streams, CyberFox stands vigilant at the digital confluence, her gaze piercing through the intertwining code branches.)</i></p>
        <p>At the heart of CyberFox's realm, the seamless integration of divergent code streams is paramount. With a command that resonates through the cybernetic void, <code>git merge --no-ff feature-branch</code>, she masterfully orchestrates the union of disparate code paths, weaving them into the main narrative without losing their individual essence.</p>
        <div className="code-block">
          <code>git merge --no-ff feature-branch</code>
        </div>
        <p>This command, marked by the <code>--no-ff</code> flag, is not merely a technical directive but a strategic maneuver. It ensures that each branch's journey is preserved, encapsulated in a new commit, maintaining the integrity of the feature branch's history. This act is a testament to CyberFox's wisdom, acknowledging that every line of code, every branch's journey, contributes to the tapestry of her digital empire.</p>
        <p><i>(As the merge completes, the digital tapestry shimmers with newfound coherence, each thread now part of a greater whole, yet its origin story intact, a tribute to CyberFox's adept governance over her codebase.)</i></p>
      </section>
      <section className="content-section cyberpunk-btn">
      <h2>Veiling the Code: The Art of Stashing</h2>
      <p><i>(In the midst of a digital maelstrom, CyberFox detects a critical alert—her immediate attention is demanded elsewhere. Yet, the tapestry of her current creation remains unfinished, delicate threads of code hanging in the balance.)</i></p>
      <p>Summoning the ancient rite of <code>git stash</code>, she casts her unfinished work into the shadows, a digital vault where it remains shielded from the chaos of the ongoing storm. This command, <code>git stash push -m "New feature work in progress"</code>, serves as a protective incantation, ensuring her endeavors are safely ensconced in the ether, awaiting her return.</p>
      <div className="code-block">
        <code>git stash push -m "New feature work in progress"</code>
      </div>
      <p>This act of stashing is not merely a pause but a strategic retreat, allowing CyberFox to address the immediate without sacrificing the future. <i>(As the code vanishes from the visible realm, CyberFox turns her focus to the urgent, her mind at ease knowing her creations are safeguarded within the digital vault, ready to be summoned forth when the time is right.)</i></p>
    </section>



    <section className="content-section cyberpunk-btn">
      <h2>The Temporal Weave: Cherry-Picking Through Time</h2>
      <p><i>(In the dim glow of her digital sanctum, CyberFox stands before the flowing streams of code, her eyes tracing the lines of power that bind the present to the past.)</i></p>
      <p>With the precision of a time weaver, she invokes the command <code>git cherry-pick 4a2b3c4d</code>, reaching back into the annals of her repository to retrieve a fragment of code, a lost artifact of innovation that holds the key to surmounting her current challenge.</p>
      <div className="code-block">
        <code>git cherry-pick 4a2b3c4d</code>
      </div>
      <p><i>(As the chosen commit materializes within her present workstream, the once dormant code pulses with renewed life, its integration seamless, as if it had always been a part of the grand design.)</i></p>
      <p>This act of cherry-picking is not merely the retrieval of code but a masterstroke of strategy, allowing CyberFox to bridge temporal divides and harness the collective wisdom of her past endeavors, ensuring that no insight, no spark of genius, is ever left behind in the relentless march towards the future.</p>
    </section>


          <section className="content-section cyberpunk-btn">
          <h2>Epilogue: The Artisan of Archives</h2>
          <p><i>(The terminal's glow fades to a whisper, leaving only the echo of keystrokes in the air.)</i></p>
          <p>The chronicles of CyberFox's exploits within the Git matrix extend beyond mere version control. They are a testament to her mastery over the codebase, a dance of digits and decisions that shape the future of the cybernetic domain.</p>
          <p><i>(And so, the saga continues, for there are always more secrets to uncover, more techniques to master, and more code to write.)</i></p>
        </section>
    </div>
  );
};

export default Module3;



