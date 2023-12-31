# Use the official Node.js 16 image
FROM node:16-bullseye

# Avoid prompts from apt
ENV DEBIAN_FRONTEND noninteractive

# Install Xorg, Openbox, wget, git, libasound2, supervisor, and other dependencies
RUN apt-get update && apt-get install -y \
    xorg \
    openbox \
    wget \
    git \
    libasound2 \
    supervisor \
    sudo \
    vim \
    nano \
    libnotify4 \
    xdg-utils \
    libgtk-3-0 \
    libgbm-dev \
    libnss3 \
    libsecret-1-0 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Create a non-root user 'cyberfox' with no password, and set their home directory
RUN useradd -m cyberfox --shell /bin/bash

# Create the /etc/sudoers.d/ directory if it doesn't exist
RUN mkdir -p /etc/sudoers.d/

# Add cyberfox user to sudoers with no password requirement
RUN echo "cyberfox ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/cyberfox
RUN chmod 0440 /etc/sudoers.d/cyberfox

# Set the user's shell to bash instead of sh
RUN chsh -s /bin/bash cyberfox

# Set the working directory to the non-root user's directory
WORKDIR /home/cyberfox

# Download and install Hyper as the non-root user
RUN wget https://releases.hyper.is/download/deb -O hyper.deb && \
    dpkg -i hyper.deb || apt-get install -f && \
    rm hyper.deb

# Change ownership of the home directory
RUN chown -R cyberfox:cyberfox /home/cyberfox

# Verify Hyper installation
RUN which hyper

# Setup Openbox for X11
RUN echo "exec openbox-session" > /etc/X11/xinit/xinitrc

# Copy application source including package.json, webpack.config.js, .babelrc, src folder, etc.
COPY --chown=cyberfox:cyberfox . .

# Switch to non-root user for running applications
USER cyberfox

# Install Node.js dependencies
RUN npm install

# Install additional build or dev dependencies
RUN npm install webpack webpack-cli @babel/preset-env @babel/preset-react preact preact-router node-pty --save-dev

# Set permission for webpack
RUN chmod +x ./node_modules/.bin/webpack

# Build the Preact components using webpack
RUN ./node_modules/.bin/webpack --mode production

# Switch back to root user to perform root-level operations
USER root

# Create log directories for supervisord as root user and change ownership
RUN mkdir -p /var/log/supervisor && \
    chown -R cyberfox:cyberfox /var/log/supervisor

# Copy supervisord configuration file
COPY --chown=cyberfox:cyberfox supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the Node.js server port
EXPOSE 3000

# Expose the X11 port for Hyper
EXPOSE 6000

# Set the display environment variable for X11
ENV DISPLAY :0

# Command to start supervisord which can manage both your server and any other process
CMD ["/usr/bin/supervisord"]















