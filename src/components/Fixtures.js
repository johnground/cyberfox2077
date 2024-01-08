const FIXTURES = {
    headerMenu: [
      { notificationCount: 0, text: "CyberFox-2077 Home" },
      { notificationCount: 0, text: "README" },
      { notificationCount: 0, text: "Project" },
      { notificationCount: 0, text: "Ansible" },
      { notificationCount: 0, text: "Files" }
    ],
    feed: [
      { id: "5ba5", name: "Module 1: Introduction to Version Control and Git", unread: 5 },
      { id: "4f22", name: "Module 2: GitLab Essentials", unread: 6 },
      { id: "fee9", name: "Module 3: Advanced Git Techniques", unread: 4 },
      { id: "a0cc", name: "Module 4: Ansible and Automation", unread: 7 },
      { id: "a0df", name: "Module 5: Developing Ansible Roles for OpenCTI", unread: 6 },
      { id: "dee3", name: "Module 6: Beyond Ansible and Git", isPrivate: true, unread: 5 }
    ],
    conversation: [
      {
        id: "cc23",
        isOnline: true,
        unread: 5,
        name: "OpenCTI Project Progression"
      },
      { id: "95b4", isOnline: true, name: "Ansible Control Node", unread: 1 },
      { id: "10cf", name: "Git Command Sheet" },
      { id: "e466", name: "OpenCTI" },
      { id: "ca0b", name: "Ansible Roles" }
    ],
    channels: [ 
      { id: "general", name: "General" },
      { id: "help", name: "Help" },
    ],
    messages: [
      {
        id: "fd0cf",
        content: "CyberFox-2077 System Initialization...",
        dateTime: "2077-10-09T11:04:57Z",
        author: {
          id: "d12c",
          name: "System.Git"
        }
      }
      // Add more message objects as needed
    ],
    gitCheatSheet: [
        // Placeholder data structure for Git cheat sheet
        { title: 'Git Command 1', description: 'Description for Git Command 1' },
        { title: 'Git Command 2', description: 'Description for Git Command 2' },
        // Add more cheat sheet items as needed
    ],
  };
  
  export default FIXTURES;
  