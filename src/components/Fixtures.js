const FIXTURES = {
  headerMenu: [
    { notificationCount: 0, text: "CyberFox-2077 Home" },
    { notificationCount: 0, text: "README" },
    { notificationCount: 0, text: "Project" },
    { notificationCount: 0, text: "Ansible" },
    { notificationCount: 0, text: "Files" }
  ],
  feed: [],
  conversation: [
    { id: "cc23", isOnline: true, unread: 5, name: "OpenCTI Project Progression" },
    { id: "95b4", isOnline: true, name: "Ansible Control Node", unread: 1 },
    { id: "10cf", name: "Git Command Sheet" },
    { id: "e466", name: "OpenCTI" },
    { id: "ca0b", name: "Ansible Roles" }
  ],
  channels: [
    { id: "readme", name: "README" },
    { id: "cheat sheet", name: "Cheat Sheet" },
  ],
  messages: [
    {
      id: "fd0cf",
      content: "CyberFox-2077 System Initialization...",
      dateTime: "2077-10-09T11:04:57Z",
      author: { id: "d12c", name: "System.Git" }
    }
    // Additional message objects as needed
  ],
  gitCheatSheet: [
    { category: "Git", title: 'git init', description: 'Initialize a new Git repository in the current directory.' },
    { category: "Git", title: 'git clone [url]', description: 'Clone a repository into a new directory.' },
    { category: "Git", title: 'git add [file]', description: 'Add a file to the staging area.' },
    { category: "Git", title: 'git commit -m "[message]"', description: 'Commit the staged changes with a message.' },
    { category: "Git", title: 'git status', description: 'Show the working directory status.' },
    { category: "Git", title: 'git branch', description: 'List, create, or delete branches.' },
    { category: "Git", title: 'git checkout [branch-name]', description: 'Switch branches or restore working tree files.' },
    { category: "Git", title: 'git merge [branch]', description: 'Merge two or more development histories together.' },
    { category: "Git", title: 'git rebase [branch]', description: 'Reapply commits on top of another base tip.' },
    { category: "Git", title: 'git stash', description: 'Stash the changes in a dirty working directory away.' },
    { category: "Git", title: 'git reset [file]', description: 'Unstage a file while retaining the changes in working directory.' },
    { category: "Git", title: 'git revert [commit]', description: 'Revert some existing commits.' },
    { category: "Git", title: 'git fetch [remote]', description: 'Download objects and refs from another repository.' },
    { category: "Git", title: 'git pull [remote] [branch]', description: 'Fetch from and integrate with another repository or a local branch.' },
    { category: "Git", title: 'git push [remote] [branch]', description: 'Update remote refs along with associated objects.' },
    { category: "Docker", title: 'docker run [image]', description: 'Run a Docker container.' },
    { category: "Docker", title: 'docker ps', description: 'List running containers.' },
    { category: "Docker", title: 'docker images', description: 'List all images.' },
    { category: "Docker", title: 'docker pull [image]', description: 'Pull an image from a registry.' },
    { category: "Docker", title: 'docker stop [container]', description: 'Stop a running container.' },
    { category: "Docker", title: 'docker build -t [tag] .', description: 'Build an image from a Dockerfile.' },
    { category: "Docker", title: 'docker exec -it [container] [command]', description: 'Execute a command in a running container.' },
    { category: "Docker", title: 'docker logs [container]', description: 'Fetch the logs of a container.' },
    { category: "Docker", title: 'docker volume create [name]', description: 'Create a volume.' },
    { category: "Docker", title: 'docker network create [name]', description: 'Create a network.' },
    { category: "Docker", title: 'docker-compose up', description: 'Start and run a multi-container Docker application.' },
    { category: "Docker", title: 'docker-compose down', description: 'Stop and remove containers, networks, etc.' },
    { category: "Docker", title: 'docker rmi [image]', description: 'Remove one or more images.' },
    { category: "Docker", title: 'docker system prune', description: 'Remove unused data.' },
    { category: "Docker", title: 'docker swarm init', description: 'Initialize a Docker swarm.' },
    { category: "Ansible", title: 'ansible [host-pattern] -m ping', description: 'Check the connection to hosts.' },
    { category: "Ansible", title: 'ansible-playbook [playbook.yml]', description: 'Run an Ansible playbook.' },
    { category: "Ansible", title: 'ansible-galaxy init [role]', description: 'Create a role skeleton.' },
    { category: "Ansible", title: 'ansible-vault create [file]', description: 'Create an encrypted file.' },
    { category: "Ansible", title: 'ansible-config list', description: 'List all configuration settings.' },
    { category: "Ansible", title: 'ansible-playbook [playbook.yml] --syntax-check', description: 'Check playbook syntax.' },
    { category: "Ansible", title: 'ansible-galaxy install [role]', description: 'Install a role from Ansible Galaxy.' },
    { category: "Ansible", title: 'ansible-vault edit [file]', description: 'Edit an encrypted file.' },
    { category: "Ansible", title: 'ansible [host-pattern] -m setup', description: 'Gather facts about remote hosts.' },
    { category: "Ansible", title: 'ansible-playbook [playbook.yml] --step', description: 'Execute tasks step-by-step.' },
    { category: "Ansible", title: 'ansible-playbook [playbook.yml] --limit [hosts]', description: 'Limit selected hosts to an Ansible playbook.' },
    { category: "Ansible", title: 'ansible-console', description: 'Interactive Ansible command line.' },
    { category: "Ansible", title: 'ansible-doc [module]', description: 'Show documentation for a module.' },
    { category: "Ansible", title: 'ansible-vault rekey [file]', description: 'Change the password for an encrypted file.' },
    { category: "Ansible", title: 'ansible-playbook [playbook.yml] --check', description: 'Dry run.' }
  ]
  // Other FIXTURES data as previously defined
};

export default FIXTURES;
