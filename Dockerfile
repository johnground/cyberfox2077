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
    libasound2 \
    supervisor \
    build-essential && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install dependencies for Hyper
RUN apt-get update && apt-get install -y \
    libnotify4 \
    xdg-utils

# Install Hyper as root
RUN wget https://releases.hyper.is/download/deb -O hyper.deb && \
    dpkg -i hyper.deb && \
    rm hyper.deb

# Verify Hyper installation
RUN which hyper

# Setup Openbox for X11
RUN echo "exec openbox-session" > /etc/X11/xinit/xinitrc

# Create a non-root user 'cyberfox' and set the home directory
RUN useradd -m cyberfox

# Set the working directory to the current user's directory
WORKDIR /home/cyberfox

# Copy application source including package.json, webpack.config.js, .babelrc, src folder, etc.
COPY --chown=cyberfox:cyberfox . .

# Install Node.js dependencies including Preact
RUN npm install

# Build the Preact components using webpack
RUN npm run build

# Copy supervisord configuration file
COPY --chown=cyberfox:cyberfox supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the Node.js server port
EXPOSE 3000

# Expose the X11 port for Hyper
EXPOSE 6000

# Set the display environment variable for X11
ENV DISPLAY :0

# No need to create 'projects' directory if it's already in the copied context
# RUN mkdir -p projects

# Command to start supervisord which can manage both your server and any other process
CMD ["/usr/bin/supervisord"]



