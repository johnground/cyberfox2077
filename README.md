# CyberFox-2077: Git/GitLab Training Program

Welcome to CyberFox-2077, a cyberpunk-themed training program designed to teach the fundamentals and advanced functionalities of Git and GitLab. This course also focuses on developing Ansible Roles/Playbooks for OpenCTI, providing a hands-on experience in managing cybersecurity projects.

## About the Course

CyberFox-2077 is a comprehensive training program divided into six modules. Each module is crafted to guide learners through various aspects of Git, GitLab, and Ansible, with a special emphasis on applying these skills to OpenCTI projects.

## Prerequisites
1. Basic understanding of command line interfaces and text editors.
2. Installation of Git and Docker on your machine.
3. (Optional) Access to a GitLab account for hands-on experience.
4. A computer capable of running docker containers with at least 12GB of RAM.

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
git clone https://hyperlethalvector.com/CyberFox-2077.git
cd CyberFox-2077
```
## Setting up the Development Environment
This course's interactive elements are designed with Preact and can be run in a Docker container. Follow these steps to set up your environment:

1. **Ensure Docker is installed on your machine.** You can download Docker Desktop for Windows or Mac from the official Docker website. For Linux users, follow the instructions for your specific distribution.
2. **Build the Docker image from scratch without using cache with the following command:**


```bash
docker build --no-cache -t cyberfox-2077 .
```
1. **Once the image is built, run the container using:**

```bash
docker run -d -p 3000:3000 -p 6000:6000 --name cyberfox -v $(pwd):/home/cyberfox cyberfox-2077
```
This will start the Node.js server and the Hyper terminal, exposing the necessary ports for web and X11 access. Building with `--no-cache` will take longer since each layer of the image is created anew. This command should be used especially when you want to make sure that the latest versions of dependencies are fetched or when you want to avoid potential issues caused by the Docker cache.

The `-d`flag runs the container in detached mode, allowing the terminal to be used for other commands while the container runs in the background. The `-p 3000:3000` flag maps the container's port 3000 to port 3000 on the host machine for the Node.js server, and the `-p 6000:6000` flag maps the X11 port for Hyper. This setup allows you to access the Node.js server via `localhost:3000` and the X11 port via port 6000 on your host machine.

`$(pwd)` will be replaced by your current working directory path when the command is executed.
`-v $(pwd):/home/cyberfox` mounts the current working directory to `/home/cyberfox` in the Docker container.
Make sure you run this command in the root of your project directory, so that the entire project is mounted into the container. This allows you to make changes to the project files and see the changes reflected in the container.

The `--name cyberfox` option names your running container cyberfox for easier reference.



## Interacting with the Docker Container and the Hyper Terminal
starting nodejs server in the docker container using detached mode  
To start the Node.js server, run the following command:

```bash
docker exec -it -d cyberfox npm start
```

### To access the Hyper terminal, run the following command:

```bash
docker exec -it cyberfox hyper 
```
### This will open the Hyper terminal in the container. You can now run the commands in the course modules.

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
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
OpenCTI for providing the context for cybersecurity project management.
The Git and GitLab communities for their invaluable resources and support.