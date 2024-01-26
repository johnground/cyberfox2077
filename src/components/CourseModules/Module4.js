import { h } from 'preact';
import '/styles/module.css'; // Ensure the path to your CSS is correct

const Module4 = () => {
  return (
    <div className="module-container">
      <header>
        <h1>Module 4: Ansible and Automation - The Symphony of Cybernetic Harmony</h1>
      </header>
      <article className="content">
        <section>
          <p><i>(The electric hum of machinery resonates through the air. CyberFox stands amidst a web of flickering holographic displays, each one pulsing with streams of data.)</i></p>
          <p>Within the heart of CyberFox's command center, the stage is set for a performance of orchestration unlike any other. Here, Ansible is the maestro, conducting an ensemble of machines with the finesse of a virtuoso. With the power of automation, each task, each deployment, each critical update is executed with precision and grace.</p>
        </section>

        <section>
          <h2>Invoking Ansible: The Incantation of Infrastructure</h2>
          <p>CyberFox begins the incantation, her voice a whisper over the keys. With each command, the Ansible playbook comes to life, weaving the spells of configuration across the network.</p>
          <div className="code-block">
            <code>ansible-playbook site.yml -i inventory</code>
          </div>
          <p><i>(As the playbooks execute, machines far and wide respond, their systems aligning to CyberFox's will.)</i></p>
        </section>

        <section>
          <h2>Ansible Roles: Crafting the Artifacts of Automation</h2>
          <p><i>(A schematic of roles and tasks materializes, detailing the architecture of the automated realm.)</i></p>
          <p>Each role is an artifact, a component in the grand design. CyberFox assembles these with care, constructing the building blocks of a system resilient and robust.</p>
          <div className="code-block">
            <code>ansible-galaxy role init my_new_role</code>
          </div>
          <p>From simple configurations to complex deployments, every role is a piece of the puzzle, fitting perfectly into the tapestry of the network.</p>
        </section>

        <section>
          <h2>Ansible Galaxy: The Repository of Reusability</h2>
          <p><i>(The vastness of the Galaxy unfurls before her, a repository brimming with shared knowledge and power.)</i></p>
          <p>Here, in the Ansible Galaxy, CyberFox finds the collective wisdom of Netrunners past. Reusable roles and collections await, ready to be woven into her own orchestration.</p>
          <div className="code-block">
            <code>ansible-galaxy install geerlingguy.nginx</code>
          </div>
          <p>With each installation, her network grows stronger, fortified by the contributions of countless others.</p>
        </section>

        <section>
          <h2>Epilogue: The Harmony of Automated Dominions</h2>
          <p><i>(The command center's glow softens as the network stabilizes into a symphony of automated operations.)</i></p>
          <p>The curtain falls on CyberFox's performance, her dominion now a testament to the power of Ansible and automation. But this is not an end, merel a pause in the continual cycle of integration and innovation.</p>
<p><i>(As the screens fade to black, the echo of CyberFox's legacy resonates through the digital void: automation is not just a tool; it is the very essence of the cybernetic future.)</i></p>
</section>
</article>
</div>
);
};

export default Module4;
