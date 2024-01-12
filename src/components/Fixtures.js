const FIXTURES = {
    headerMenu: [
      { notificationCount: 0, text: "CyberFox-2077 Home" },
      { notificationCount: 0, text: "README" },
      { notificationCount: 0, text: "Project" },
      { notificationCount: 0, text: "Ansible" },
      { notificationCount: 0, text: "Files" }
    ],
    feed: [
      
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
      { id: "readme", name: "README" },
      { id: "cheat sheet", name: "Cheat Sheet" },
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
      { title: 'git init', description: 'Initialize a new Git repository in the current directory.' },
      { title: 'git clone [url]', description: 'Clone a repository into a new directory, pulling down all the data from the repository.' },
      { title: 'git add [file]', description: 'Add a file to the staging area, marking it for inclusion in the next commit.' },
      { title: 'git commit -m "[message]"', description: 'Commit the staged changes to the repository with a descriptive message.' },
      { title: 'git status', description: 'Show the status of changes as untracked, modified, or staged.' },
      { title: 'git push [remote] [branch]', description: 'Push the committed changes to a remote repository.' },
      { title: 'git pull [remote] [branch]', description: 'Fetch and merge changes from the remote repository to the local repository.' },
      { title: 'git branch', description: 'List all of the branches in the repository, or create a new one.' },
      { title: 'git checkout [branch-name]', description: 'Switch to a specified branch and update the working directory.' },
      { title: 'git merge [branch]', description: 'Merge the specified branch’s history into the current branch.' },
      { title: 'git rebase [branch]', description: 'Reapply commits on top of another base tip.' },
      { title: 'git log', description: 'Show the commit logs.' },
      { title: 'git diff', description: 'Show the differences between commits, commit and working tree, etc.' },
      { title: 'git stash', description: 'Stash the changes in a dirty working directory away.' },
      { title: 'git tag [tag-name]', description: 'Create, list, delete or verify a tag object signed with GPG.' },
      // Add more cheat sheet items as needed
    ],
  };
  
  export default FIXTURES;
  