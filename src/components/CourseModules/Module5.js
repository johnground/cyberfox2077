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
          <pre><code className="code-block">apt install ansible -y && ansible-galaxy collection install community.general</code></pre>
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
/
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

        <section className="content-section">
        <h2>Constructing Your First Ansible Playbook for OpenCTI</h2>
<p>“Now, to organize and automate our OpenCTI deployment, we will craft an Ansible playbook,” CyberFox declares, ready to encode her strategy into automation.</p>
<p>She begins by creating an inventory file, defining the architecture of her network:</p>
<pre><code className="code-block">
  echo -e "[opencti_hosts]\nopenctihost \n\n[opencti_host:vars]\nansible_host=openctihost\nansible_port=22\nansible_become=true\nansible_user=root" &gt; opencti_inventory
</code></pre>

          <p>“With our inventory set, we can now proceed to define our playbook, the heart of our automation,” she continues, crafting the playbook with precision:</p>
          <pre><code className="code-block">{`
# /home/cyberfox/projects/opencti/opencti_playbook.yml
---
- name: Install OpenCTI
  hosts: openctihost
  become: true
  remote_user: root

  vars:
    opencti_admin_email: cyberfox@system.git
    opencti_admin_password: masterpassword
    opencti_base_url: localhost:8181
    opencti_port: 8181
    app_port: 8181
    rabbitmq_default_user: guest
    rabbitmq_default_password: guest
    elastic_memory_size: 4g
    start_service: true 
    smtp_hostname: localhost

  tasks:
    - name: ensure git is installed
      ansible.builtin.package:
        name: "git"
        state: present

    - name: Git checkout OpenCTI
      ansible.builtin.git:
        repo: 'https://github.com/OpenCTI-Platform/docker.git'
        dest: /opt/opencti

    - name: set systcl heap size
      ansible.builtin.sysctl:
        name: vm.max_map_count
        value: '1048575'
        sysctl_set: yes

    - name: Install env file 
      ansible.builtin.template:
        src: env.j2
        dest: /opt/opencti/.env
        owner: root
        group: root
        mode: '0600'
      

    - name: Pull down containers
      shell:
        cmd: "docker compose pull"
        chdir: /opt/opencti

    - name: Adjust OpenCTI port in docker-compose file
      lineinfile:
       path: /opt/opencti/docker-compose.yml
       regexp: '^\s+- "8080:8080"'
       line: '      - "{{ app_port }}:8080"'
       state: present

    - name: Start the opencti service
      shell:
        cmd: "docker compose up -d"
        chdir: /opt/opencti
            `}</code></pre>
          <p>“Each task in our playbook will ensure OpenCTI is installed, configured, and running as intended,” she notes with satisfaction.</p>
        </section>

        <section className="content-section">
          <h2>Executing the Ansible Playbook</h2>
          <p>“With our playbook crafted, it's time to execute it and deploy OpenCTI,” CyberFox announces. She initiates the playbook with a command:</p>
          <pre><code className="code-block">
            ansible-playbook -i opencti_inventory opencti_playbook.yml
          </code></pre>
          <p>“As the playbook runs, each task is executed meticulously, orchestrating the deployment of OpenCTI on our target host,” she observes, monitoring the terminal intently.</p>
        </section>

        {/* Section: Integrating Ansible with OpenCTI */}
        <section className="content-section">
          <h2>Integrating Ansible with OpenCTI for Streamlined Operations</h2>
          <p>With the OpenCTI platform now in place, CyberFox focuses on integrating Ansible for continuous automation and monitoring. The playbook becomes a vital tool, managing configurations and updates seamlessly.</p>
        </section>

        {/* Section: Advanced Ansible Strategies */}
        <section className="content-section">
          <h2>Advanced Ansible Strategies for OpenCTI</h2>
          <p>Delving deeper, CyberFox explores advanced Ansible techniques for OpenCTI. She experiments with dynamic inventories, custom modules, and complex playbooks to adapt to evolving cyber threats.</p>
        </section>

        {/* Section: Epilogue */}
        <section className="content-section">
          <h2>Epilogue: Mastery of Automation</h2>
          <p>CyberFox's command center now hums with a network in perfect harmony, automated and resilient. The OpenCTI platform, orchestrated by Ansible, operates with precision, safeguarded from digital threats.</p>
        </section>

        {/* Footer */}
        <footer className="module-footer">
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
};

export default Module5;