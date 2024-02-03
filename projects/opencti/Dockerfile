FROM ubuntu:22.04

# Install necessary packages
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    curl \
    openssh-server \
    vim \
    sudo \
    python3-pip \
    python3-dev \
    apt-transport-https \
    ca-certificates \
    gnupg-agent \
    software-properties-common \
    build-essential \
    libffi-dev \
    libssl-dev \
    libyaml-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configure SSH
RUN mkdir /var/run/sshd \
    && echo 'root:masterpassword' | chpasswd \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

# Set environment variable
ENV NOTVISIBLE "in user profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Setup Ansible
RUN mkdir -p /etc/ansible && touch /etc/ansible/hosts

# Expose SSH port
EXPOSE 22

# Install Docker
RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

# Upgrade pip, setuptools, and wheel
RUN pip3 install --upgrade pip setuptools wheel

# Install Docker SDK for Python
RUN pip3 install docker --no-cache-dir

# Alternative 2: Install Docker Compose using binary
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Define entrypoint
ENTRYPOINT ["/usr/sbin/sshd", "-D"]



