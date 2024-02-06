# CyberFox-2077: Git/GitLab Training Program

Welcome to CyberFox-2077, a cyberpunk-themed training program designed to teach the fundamentals and advanced functionalities of Git and GitLab. This course also focuses on developing Ansible Roles/Playbooks for OpenCTI, providing a hands-on experience in managing cybersecurity projects.

## About the Course

CyberFox-2077 is a comprehensive training program divided into six modules. Each module is crafted to guide learners through various aspects of Git, GitLab, and Ansible, with a special emphasis on applying these skills to OpenCTI projects.

**IMPORTANT WSL NOTE**
Windows Subsystem for linux (WSL) is not supported for this course, if you choose to use it, you incur all troubleshooting and configurations. Please use a native linux environment or a virtual machine running a linux distribution.

## Prerequisites
1. Basic understanding of command line interfaces and text editors.
2. Installation of Git and Docker on your machine.
3. (Optional) Access to a GitLab account for hands-on experience.
4. A computer capable of running docker containers with at least 12GB of RAM.
5. git installed on your machine
6. docker installed on your machine

# Installing Git on Ubuntu 22.04 LTS

Please note that this code assumes you have administrative privileges (`sudo`) and the `apt` package manager is available on your system. For the purpose of this course this script is merely demonstrative and helps you to install git and configure your user name and email. Howeever, we will be configuring our unique user name and email with CyberFox creds for the purpose of this course.

``` bash
sudo apt update && apt install git -y && git --version && git config --global user.name "Your Name" && git config --global user.email  
```

This code snippet demonstrates the installation process for Git using the `apt` package manager. The following steps are performed:

1. Update the package lists using 
``` bash 
sudo apt update 
```
2. Install Git using
``` bash
sudo apt install git -y
``` 
3. Verify the installation by checking the Git version using 
``` bash
git --version
```
4. Set the global Git user name using `
``` bash
git config --global user.name "Cyberfox"
```
5. Set the global Git user email using 
``` bash
git config --global user.email "CyberFox@2077.git"
```



# Installing Git on Windows
1. Go to the official Git website (https://git-scm.com/downloads) and download the latest version of Git for Windows. 
2. The download will start automatically. Once the download is complete, double-click the installer to start the installation process. 
3. Follow the on-screen instructions to complete the installation. During the installation, you can leave all the default settings as they are.
4. Once the installation is finished, Git will be available in the Windows Command Prompt or powershell.

# Installing Docker on Linux
**Ubuntu 22.04 LTS** is recommended, here is the docker onliner for ubuntu 22.04 LTS to install docker and add your user to the docker group. This scripts also enables docker to start on boot and starts docker after installation. Milage may vary on other distributions.

```bash
sudo apt update && sudo apt install -y apt-transport-https ca-certificates curl software-properties-common && curl -fsSL https://get.docker.com | sudo bash - && sudo usermod -aG docker $USER && sudo systemctl enable docker && sudo systemctl start docker && source ~/.bashrc
sudo apt install -y docker-compose
sudo usermod -aG docker cyberfox
```
After you install docker, you will need to log out and log back in to apply the changes to your user group. You can also use the following command to apply the changes without logging out:



## Course Modules

1. **Introduction to Version Control and Git**: Understanding the basics of Git and its importance in modern software development.
2. **GitLab Essentials**: Exploring the features of GitLab and how they enhance project collaboration and version control.
3. **Advanced Git Techniques**: Diving deeper into Git to uncover powerful tools and techniques for effective version management.
4. **Ansible and Automation**: Introducing Ansible for automating application deployment and configuration management.
5. **Developing Ansible Roles for OpenCTI**: Hands-on module focused on creating Ansible Roles and Playbooks tailored for OpenCTI.
6. **Best Practices in Git and Ansible**: Consolidating the knowledge with best practices and industry standards for Git and Ansible.

## Getting Started

To get started with CyberFox-2077, clone this repository and follow the instructions in each module's directory.

```bash
git clone https://github.com/johnground/cyberfox2077.git
cd CyberFox-2077
```
## Setting up the Development Environment
This course's interactive elements are designed with Preact and can be run in a Docker container. Follow these steps to set up your environment:

1. **Ensure Docker is installed on your machine.** You can download Docker Desktop for Windows or Mac from the official Docker website. For Linux users, follow the instructions for your specific distribution.
2. **Build the Docker image from scratch without using cache with the following command:**

Windows WSL With Docker Desktop:

```bash
docker-compose up -d
```
Linux Ubuntu 22.04:
    
```bash
docker-compose up -d
```

1. **Once the image is built, Navigate to the Webpage: cyberfox:8080**

2. **You should now see the CyberFox-2077 Webpage**

## Interacting with the Docker Container - General Purpose TroubleShooting

###To view the output of your Node.js server, you can use the following command:
```bash
docker logs cyberfox
```

###If you need to stop the server, you can do so with the following command:

```bash
docker stop cyberfox
```
###To start the server again, simply use:
```bash
docker start cyberfox
```

If you need to enter the container to interact with the Node.js environment directly, you can use the exec command to start a shell session:

```bash
docker exec -it cyberfox /bin/bash
```
### To start all over again, you can remove the container and image with the following commands:

Windows PowerShell:
```bash
docker stop $(docker ps -a -q) ; docker rm -f $(docker ps -a -q) ; docker rmi -f $(docker images -a -q) ; docker volume rm $(docker volume ls -q) ; docker network rm $(docker network ls -q) ; docker system prune -a -f --volumes
```
Linux Bash:
```bash
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q) && docker rmi -f $(docker images -a -q) && docker volume rm $(docker volume ls -q) && docker network rm $(docker network ls -q) && docker system prune -a -f --volumes
```

#Using the Course
Each module contains a mix of theoretical concepts and practical exercises. It is recommended to follow the modules in sequence for a progressive learning experience.

## Contributions
Contributions to CyberFox-2077 are welcome! If you have suggestions or improvements, please create an issue or a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details. Module 6 content is copyright by Secure Enterprise Engineering https://www.secure-ee.com/. 

## Acknowledgements
Secure Enterprise Engineering for inspiring the many integrations and resources for this course.
OpenCTI for providing the context for cybersecurity project management.
The Git and GitLab communities for their invaluable resources and support