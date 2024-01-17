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
          <pre><code className="code-block">
            sudo su
          </code></pre>
          <p><i>(The system acknowledges her elevated status, the screens now an open canvas for her commands.)</i></p>
        </section>


        <section className="content-section">
          <h2>Installing Ansible: Orchestrating the Cyber Symphony</h2>
          <p>“To command our cyber forces, we need Ansible,” CyberFox states, preparing her terminal for the installation.</p>
          <pre><code className="code-block">
            apt update
            apt install ansible -y
          </code></pre>
          <p>With Ansible now ready, she checks its version, ensuring all systems are go:</p>
          <pre><code className="code-block">
            ansible --version
          </code></pre>
        </section>
        <section className="content-section">
          <h2>Deploying OpenCTI: CyberFox's Strategic Maneuver</h2>
          <p><i>(CyberFox's fingers dance across the terminal, orchestrating her next strategic move in the cyber domain.)</i></p>
          <p>“To fortify our cyber intelligence capabilities, we must deploy OpenCTI. It shall be the core of our information gathering,” she declares, pulling the latest Ubuntu image for the task:</p>
          <pre><code className="code-block">
            docker pull ubuntu:22.04
          </code></pre>
          <p>“Now, let us breathe life into OpenCTI,” she continues, running a new container named 'OpenCTI' on alternate ports to avoid any conflicts:</p>
          <pre><code className="code-block">
            docker run -d --name OpenCTI -p 2222:22 -p 8181:8080 ubuntu:22.04
          </code></pre>
          <p><i>(As the container springs to life, its digital heartbeat pulsates through the network, ready for CyberFox’s masterful orchestration.)</i></p>
        </section>
        <section className="content-section">
          <h2>Establishing Secure Communications: OpenSSH Server</h2>
          <p><i>(CyberFox turns her attention to the next critical component, ensuring secure lines of communication.)</i></p>
          <p>“For secure and reliable connections, the OpenSSH server is our next target,” she declares. With a few keystrokes, she commences the installation:</p>
          <pre><code className="code-block">
            apt install openssh-server -y
          </code></pre>
          <p><i>(The installation completes, fortifying the cyber command center with secure and robust communication channels.)</i></p>
        </section>
         <section>
          <p>She then tailors the Ansible environment to her strategic needs:</p>
          <pre><code className="code-block">
            echo "[defaults]\ninventory = /etc/ansible/hosts\nremote_user = ansible" &gt; ansible.cfg
          </code></pre>
          <p>“Now, to secure our network nodes,” she muses, initiating the creation of an Ed25519 SSH key, specifying the default file location:</p>
          <pre><code className="code-block">
            ssh-keygen -t ed25519 -C "cyberfox@2077" -f /root/.ssh/id_ed25519
          </code></pre>
          <p><i>(A digital key springs into existence, echoing through the cyber corridors with a promise of security and efficiency.)</i></p>
          <p>She extends this key to her network allies, forging a seamless and secured alliance:</p>
          <pre><code className="code-block">
            ssh-copy-id ansible_user@opencti
          </code></pre>
          <p><i>(“With these keys, our network is now an impenetrable fortress, guarded by the strength of our united front,” CyberFox declares, as her screens glow in silent agreement.)</i></p>
        </section>

        <section className="content-section">
          <h2>Constructing Your First Ansible Role for OpenCTI</h2>
          <p>Create the directory structure for your new Ansible role:</p>
          <pre><code className="code-block">
            ansible-galaxy init opencti_role
          </code></pre>
          <p>Develop tasks in the `main.yml` file of your role to handle OpenCTI prerequisites:</p>
          <pre><code className="code-block">
    {`# roles/opencti_role/tasks/install_opencti.yml
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
    enabled: yes`}
  </code></pre>
          <p>Each task within your role should be as idempotent as possible, allowing you to rerun your playbooks without unintended side effects.</p>
</section>
     {/* Integration of the Ansible role with OpenCTI for streamlined threat intelligence */}
     <section className="content-section">
      <h2>Integrating Ansible with OpenCTI for Streamlined Operations</h2>
      <p>With the infrastructure in place, CyberFox focuses on the integration of Ansible roles with OpenCTI to automate the cyber threat intelligence pipeline. The orchestration of tasks and handlers ensures that every aspect of the OpenCTI platform is meticulously configured and maintained.</p>
      <div className="code-block">
        <code>
          ansible-playbook -i inventory opencti_deployment.yml
        </code>
      </div>
      <p><i>(As the playbook runs, the OpenCTI platform springs to life, each service slotting into place like gears in a well-oiled machine.)</i></p>
    </section>

    {/* Advanced Ansible Strategies for Complex OpenCTI Workflows */}
    <section className="content-section">
      <h2>Advanced Ansible Strategies for Complex OpenCTI Workflows</h2>
      <p>CyberFox delves deeper, crafting advanced strategies for complex OpenCTI workflows. Utilizing Ansible's capabilities, she creates dynamic inventories and custom modules that respond to the ever-changing landscape of cyber threats.</p>
      <div className="code-block">
        <code>
          ansible-playbook -i dynamic_inventory.py opencti_advanced.yml
        </code>
      </div>
    </section>

    {/* Epilogue: CyberFox's Ascendancy in Automation */}
    <section className="content-section">
      <h2>Epilogue: CyberFox's Ascendancy in Automation</h2>
      <p><i>(The command center quiets, the screens display a network in perfect harmony, automated and secure.)</i></p>
      <p>CyberFox steps back, her vision realized. OpenCTI now operates like a digital organism, self-sustaining and intelligent, protected from threats by the automated guardianship of Ansible. The cyber realm whispers her name, a legend in the art of automation.</p>
    </section>

    <footer className="module-footer">
      {/* Footer content, possibly including navigation to other modules */}
    </footer>
  </div>
</div>

);
};

export default Module5;




