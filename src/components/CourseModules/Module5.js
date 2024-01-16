import { h } from 'preact';
import '/styles/module5.css';

const Module5 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 5: Developing Ansible Roles for OpenCTI</h1>
      </header>
      
      <div className="content">
        {/* Embracing Automation in Threat Intelligence with Ansible */}
        <section className="content-section">
          <h2>Embracing Automation in Threat Intelligence with Ansible</h2>
          <p>In Module 5, we venture into the automation of threat intelligence using Ansible. This module is designed for cybersecurity professionals who are looking to streamline their operational efficiency through automation. We'll unpack the essentials of Ansible - a powerful IT automation engine that will transform your OpenCTI deployment into a set-and-forget system.</p>
        </section>

        {/* Understanding Ansible's Role in Cybersecurity */}
        <section className="content-section">
          <h2>Understanding Ansible's Role in Cybersecurity</h2>
          <p>Before we dive into the technicalities, it's crucial to comprehend the place of Ansible within the cybersecurity framework. Ansible enables teams to automate the mundane, giving them the leverage to focus on strategic threats. It's about augmenting your team's capabilities to respond to incidents with speed and precision.</p>
        </section>

        <section className="content-section">
          <h2>Installing Ansible and Configuring the Environment</h2>
          <p>Begin by installing Ansible on your Linux control node. Here's how to do it using the default package manager:</p>
          <pre><code className="code-block">
            sudo apt update
            sudo apt install ansible -y
          </code></pre>
          <p>After installing, you can verify the installation with:</p>
          <pre><code className="code-block">
            ansible --version
          </code></pre>
          <p>Now, let's configure the Ansible environment:</p>
          <pre><code className="code-block">
            echo "[defaults]\ninventory = /etc/ansible/hosts\nremote_user = ansible_user" &gt; ansible.cfg
          </code></pre>
          <p>Set up SSH keys for the Ansible user on your control node and copy them to managed hosts:</p>
          <pre><code className="code-block">
            ssh-keygen -t rsa -b 4096
            ssh-copy-id ansible_user@managed_host_ip
          </code></pre>
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
    
    {/* Add additional sections for deploying OpenCTI with Ansible, verifying the deployment, and troubleshooting common issues, each with relevant code examples. */}
    
    <footer className="module-footer">
      {/* Footer content */}
    </footer>
  </div>
</div>
);
};

export default Module5;




