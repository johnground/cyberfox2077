import { h } from 'preact';
import '/styles/module3.css'; // Make sure to provide the correct path to your CSS file

const Module3 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 3: Advanced Git Techniques - The CyberFox Chronicles</h1>
      </header>
      <article className="content">
        <section>
          <h2>Decoding the Git Matrix: Rebasing Reality</h2>
          <p><i>(CyberFox's fingers dance across the terminal, each keystroke reshaping the very fabric of the repository's history.)</i></p>
          <p>Understanding the flow of time is crucial in the cyber realm, and with Git rebase, CyberFox bends the commit timeline to her will, ensuring a clean, linear history that tells a tale as she sees fit.</p>
          <div className="code-block">
            <code>git rebase -i HEAD~5</code>
          </div>
          <p><i>(Her screen illuminates with possibilities, commits waiting for her command to rewrite their existence.)</i></p>
        </section>

        <section>
          <h2>Mastering the Merge: Confluence of Code Streams</h2>
          <p>In the network's neural pathways, branches diverge and converge like streams in a vast digital delta. CyberFox stands at the confluence, orchestrating the merge with deft precision, ensuring that no byte is out of place.</p>
          <div className="code-block">
            <code>git merge --no-ff feature-branch</code>
          </div>
          <p>The <code>--no-ff</code> flag commands Git to create a new commit object during the merge, preserving the history of the feature branch's existence.</p>
        </section>

        <section>
          <h2>Stashing Secrets: The Hidden Cache of Code</h2>
          <p><i>(Alerts flash across her HUD — an urgent fix is needed in production. With unsaved changes still in her workspace, CyberFox needs a place to store them temporarily.)</i></p>
          <p>Like a shadow vault, <code>git stash</code> conceals her work in progress, tucked away from prying eyes until she can return to continue her craft.</p>
          <div className="code-block">
            <code>git stash push -m "New feature work in progress"</code>
          </div>
        </section>

        <section>
          <h2>Cherry-Picking Fragments of Time</h2>
          <p>Sometimes, the future needs a spark from the past. CyberFox plucks specific commits from the branches of time, cherry-picking them to weave into the current narrative of her project's code.</p>
          <div className="code-block">
            <code>git cherry-pick 4a2b3c4d</code>
          </div>
        </section>

        <section>
          <h2>Epilogue: The Artisan of Archives</h2>
          <p><i>(The terminal's glow fades to a whisper, leaving only the echo of keystrokes in the air.)</i></p>
          <p>The chronicles of CyberFox's exploits within the Git matrix extend beyond mere version control. They are a testament to her mastery over the codebase, a dance of digits and decisions that shape the future of the cybernetic domain.</p>
          <p><i>(And so, the saga continues, for there are always more secrets to uncover, more techniques to master, and more code to write.)</i></p>
        </section>
      </article>
    </div>
  );
};

export default Module3;



