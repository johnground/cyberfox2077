import { h } from 'preact';
import '/styles/module5.css'; // Ensure the path to your CSS is correct

const Module5 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 5: Developing Ansible Roles for OpenCTI - The Cybernetic Symphony</h1>
      </header>

      <div className="content">
        {/* Section: CyberFox Switches to Superuser Mode */}
        <section className="content-section">
          <h2>Assuming Command: CyberFox's Ascension</h2>
          <p><i>(The command center hums with anticipation as CyberFox prepares for a crucial step in securing her network.)</i></p>
          <p>“To master this realm, I must elevate my powers,” declares CyberFox. With a decisive command, she elevates her access:</p>
          <pre><code className="code-block">sudo su</code></pre>
          <p><i>(The system acknowledges her elevated status, the screens now an open canvas for her commands.)</i></p>
        </section>

        {/* Section: Installing Ansible */}
        <section className="content-section">
          <h2>Installing Ansible: Orchestrating the Cyber Symphony</h2>
          <p>“To command our cyber forces, we need Ansible,” CyberFox states, preparing her terminal for the installation.</p>
          <pre><code className="code-block">apt install ansible -y</code></pre>
          <p>With Ansible now ready, she checks its version, ensuring all systems are go:</p>
          <pre><code className="code-block">ansible --version</code></pre>
        </section>

        {/* Section: Constructing OpenCTI */}
        <section className="content-section">
          <h2>Constructing OpenCTI: The Digital Forge</h2>
          <p><i>(With a resolute expression, CyberFox navigates to the core of her project's repository.)</i></p>
          <p>“The time has come to forge our OpenCTI vessel, to shape it from the depths of our digital arsenal,” CyberFox articulates, her fingers poised above the terminal. She navigates to the project directory:</p>
          <pre><code className="code-block">cd projects/opencti</code></pre>
          <p>With a deep breath, she initiates the build process, giving life to her OpenCTI vision:</p>
          <pre><code className="code-block">docker build -t openctihost:latest .</code></pre>
          <p><i>(As the terminal hums, lines of code transform into a living entity, the OpenCTI image taking shape before her eyes.)</i></p>
        </section>

        {/* Section: Establishing Secure Communications */}
        <section className="content-section">
          <h2>Establishing Secure Communications: OpenSSH Server</h2>
          <p><i>(CyberFox turns her attention to the next critical component, ensuring secure lines of communication.)</i></p>
          <p>“For secure and reliable connections, the OpenSSH server is our next target,” she declares. With a few keystrokes, she commences the installation in the CyberFox Ansible Control node:</p>
          <pre><code className="code-block">apt install openssh-server -y</code></pre>
          <p><i>(The installation completes, fortifying the cyber command center with secure and robust communication channels.)</i></p>
        </section>

        {/* Section: Tailoring Ansible Environment */}
        <section className="content-section">
          <p>She then tailors the Ansible environment to her strategic needs:</p>
          <pre><code className="code-block">echo -e "[defaults]\ninventory = /etc/ansible/hosts\nremote_user = ansible" &gt; ansible.cfg</code></pre>
          <p>“Now, to secure our network nodes,” she muses, initiating the creation of an Ed25519 SSH key, specifying the default file location:</p>
          <pre><code className="code-block">ssh-keygen -t ed25519 -C "cyberfox@2077" -f /root/.ssh/id_ed25519</code></pre>
          <p><i>(As she confirms the action, a new key materializes, a symbol of secure connections in the digital realm.)</i></p>
          <p>She quietly accepts defaults, knowing that even in this environment she is secured from within the docker mainframe.</p>
          <p><i>(A digital key springs into existence, echoing through the cyber corridors with a promise of security and efficiency.)</i></p>
          <p>With the new key in hand, she prepares to distribute it across her network, ensuring secure, trusted connections:</p>
          <pre><code className="code-block">ssh-copy-id -i /root/.ssh/id_ed25519.pub root@openctihost</code></pre>
          <p><i>(“As the key integrates with the OpenCTI host, she senses the strengthening of her network's defenses. The encrypted pathways are now guarded, impenetrable to intruders,” CyberFox reflects, her gaze fixed on the glowing screens.)</i></p>
        </section>

        {/* Section: Constructing Your First Ansible Role for OpenCTI */}
        <section className="content-section">
          <h2>Constructing Your First Ansible Role for OpenCTI</h2>
          <p>“Before we can create our Ansible role, we must first ensure Ansible is installed on our OpenCTI host,” CyberFox notes, as she prepares the OpenCTI host for Ansible installation.</p>
          <p>She connects to the OpenCTI host:</p>
          <pre><code className="code-block">ssh root@openctihost</code></pre>
          <p>Upon successful connection, she installs Ansible:</p>
          <pre><code className="code-block">apt install ansible -y</code></pre>
          <p><i>(With Ansible now installed, the terminal echoes back a confirmation, signaling readiness for the next strategic move.)</i></p>
          <p>“Now, to organize our network nodes effectively, we need an inventory file,” CyberFox thinks aloud. She begins crafting the inventory file, a blueprint of her network's topology:</p>
          <pre><code className="code-block">echo -e "[opencti_hosts]\nopenctihost ansible_host=localhost ansible_port=2222" &gt; opencti_inventory</code></pre>
          <p><i>(With each keystroke, the network's map starts to take shape, each node a star in the constellation of her cyber realm.)</i></p>
          <p>“Now, we can initialize our Ansible role for OpenCTI,” CyberFox announces with determination. She proceeds with the following command:</p>
          <pre><code className="code-block">ansible-galaxy init opencti_role</code></pre>
          <p><i>(The command executes smoothly, structuring the foundation for their new Ansible role, a crucial step in fortifying their cyber defenses.)</i></p>
        </section>

        {/* Section: Developing Tasks in main.yml */}
        <section className="content-section">
          <p>Develop tasks in the `main.yml` file of your role to handle OpenCTI prerequisites:</p>
          <pre><code className="code-block">{`
# roles/opencti_role/tasks/install_opencti.yml
---
- name: Install necessary packages for OpenCTI
  apt:
    name:
      - apt-transport-https
      - ca-certificates
      - curl
      - software-properties-common
    state: present
    update_cache: yes

- name: Add Docker GPG key
  apt_key:
    url: https://download.docker.com/linux/ubuntu/gpg
    state: present

- name: Add Docker repository
  apt_repository:
    repo: 'deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable'
    state: present

- name: Install Docker CE
  apt:
    name: docker-ce
    state: latest
    update_cache: yes

- name: Install Docker Compose
  get_url:
    url: "{{ docker_compose_url }}"
    dest: /usr/local/bin/docker-compose
    mode: 'u+x,g+x'

- name: Ensure Docker service is running
  service:
    name: docker
    state: started
    enabled: yes
          `}</code></pre>
          <p>Each task within your role should be as idempotent as possible, allowing you to rerun your playbooks without unintended side effects.</p>
        </section>
        <section className="content-section">
  <h2>Creating the Ansible Playbook</h2>
  <p>“With our role defined, it's time to create the playbook that will orchestrate our OpenCTI deployment,” CyberFox explains. She proceeds to craft the playbook:</p>
  <pre><code className="code-block">
    echo -e "---\n- hosts: opencti_hosts\n  become: yes\n  roles:\n    - opencti_role" &gt; opencti_playbook.yml
  </code></pre>
  <p><i>(This command creates a playbook named 'opencti_playbook.yml', specifying the use of the 'opencti_role' on all hosts in the 'opencti_hosts' group.)</i></p>
  <p>“Now, with our playbook ready, we can execute it to deploy and configure OpenCTI,” she concludes with a sense of accomplishment.</p>
</section>
        <section className="content-section">
        <h2>Developing Tasks in main.yml</h2>
        <p>“To ensure our Ansible role is structured and organized, we'll define our main tasks in the 'main.yml' file,” CyberFox states. She begins by editing the 'main.yml' to include necessary tasks:</p>
        <pre><code className="code-block">
         echo -e "---\n- name: Setup OpenCTI\n  include_tasks: install_opencti.yml" &gt; opencti_role/tasks/main.yml
        </code></pre>
        <p><i>(This command adds a task to the 'main.yml' file in the 'opencti_role/tasks' directory, which includes the 'install_opencti.yml' tasks file.)</i></p>
        <p>“With our main tasks file configured, our role is now ready to handle the OpenCTI deployment comprehensively,” she notes with satisfaction.</p>
        </section>
        <section className="content-section">
  <h2>Executing the Ansible Playbook</h2>
  <p>“With our playbook and role ready, it's time to execute them and deploy OpenCTI,” CyberFox announces. She executes the playbook with a command:</p>
  <pre><code className="code-block">ansible-playbook -i opencti_inventory opencti_playbook.yml</code></pre>
  <p><i>(This command runs the 'opencti_playbook.yml' playbook, applying the configurations and tasks defined in the 'opencti_role' to the hosts specified in the 'opencti_inventory' file.)</i></p>
  <p>“As the playbook runs, each task is processed and applied, methodically setting up OpenCTI on our target host,” CyberFox observes, watching the terminal intently.</p>
</section>
        {/* Section: Integrating Ansible with OpenCTI */}
        <section className="content-section">
          <h2>Integrating Ansible with OpenCTI for Streamlined Operations</h2>
          <p>With the infrastructure in place, CyberFox focuses on the integration of Ansible roles with OpenCTI to automate the cyber threat intelligence pipeline. The orchestration of tasks and handlers ensures that every aspect of the OpenCTI platform is meticulously configured and maintained.</p>
          <div className="code-block">
            <code>ansible-playbook -i inventory install_opencti.yml</code>
          </div>
          <p><i>(As the playbook runs, the OpenCTI platform springs to life, each service slotting into place like gears in a well-oiled machine.)</i></p>
        </section>

        {/* Section: Advanced Ansible Strategies */}
        <section className="content-section">
          <h2>Advanced Ansible Strategies for Complex OpenCTI Workflows</h2>
          <p>CyberFox delves deeper, crafting advanced strategies for complex OpenCTI workflows. Utilizing Ansible's capabilities, she creates dynamic inventories and custom modules that respond to the ever-changing landscape of cyber threats.</p>
          <div className="code-block">
            <code>ansible-playbook -i dynamic_inventory.py opencti_advanced.yml</code>
          </div>
        </section>

        {/* Section: Epilogue */}
        <section className="content-section">
          <h2>Epilogue: CyberFox's Ascendancy in Automation</h2>
          <p><i>(The command center quiets, the screens display a network in perfect harmony, automated and secure.)</i></p>
          <p>CyberFox steps back, her vision realized. OpenCTI now operates like a digital organism, self-sustaining and intelligent, protected from threats by the automated guardianship of Ansible. The cyber realm whispers her name, a legend in the art of automation.</p>
        </section>

        {/* Footer */}
        <footer className="module-footer">
          {/* Footer content, possibly including navigation to other modules */}
        </footer>
      </div>
    </div>
  );
};

export default Module5;