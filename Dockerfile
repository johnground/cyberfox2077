# Start with the latest Ubuntu base image
FROM ubuntu:latest

# Avoid prompts from apt
ENV DEBIAN_FRONTEND noninteractive

# Install curl and other dependencies, update Node.js and npm to latest versions
RUN apt-get update && apt-get install -y \
    curl \
    xorg \
    openbox \
    wget \
    git \
    libasound2 && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Hyper
RUN wget https://releases.hyper.is/download/deb -O hyper.deb && \
    dpkg -i hyper.deb || apt-get install -f -y && \
    rm hyper.deb

# Setup Openbox for X11
RUN echo "exec openbox-session" > /etc/X11/xinit/xinitrc

# Create a non-root user 'myuser' and set the home directory
RUN useradd -m myuser

# Switch to non-root user
USER myuser

# Set the working directory to the current user's directory
WORKDIR /home/myuser

# Expose the Node.js server port
EXPOSE 3000

# Expose the X11 port for Hyper
EXPOSE 6000

# Set the display environment variable for X11
ENV DISPLAY :0

# Initialize package.json for npm
RUN npm init -y

# Install Preact
RUN npm install preact

# Copy application source
COPY --chown=myuser:myuser . .

# Command to start your services
CMD ["sh", "-c", "node server.js & hyper"]








