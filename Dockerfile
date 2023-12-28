# Start with a specific Ubuntu base image
FROM ubuntu:22.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND noninteractive

# Install curl, Python, build tools, and other dependencies
RUN apt-get update && apt-get install -y \
    curl \
    xorg \
    openbox \
    wget \
    git \
    libasound2 \
    supervisor \
    build-essential \
    python3 \
    make \
    g++ \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install dependencies for Hyper
RUN apt-get update && apt-get install -y \
    libnotify4 \
    xdg-utils \
    libgtk-3-0 \
    libgbm-dev

# Create a non-root user 'cyberfox' and set the home directory
RUN useradd -m cyberfox

# Set the working directory to the non-root user's directory
WORKDIR /home/cyberfox

# Download and install Hyper as the non-root user
RUN wget https://releases.hyper.is/download/deb -O hyper.deb && \
    dpkg -i hyper.deb && \
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

# Install Node.js dependencies including Preact, Babel presets, and node-pty
RUN npm install
RUN npm install webpack webpack-cli @babel/preset-env @babel/preset-react babel-plugin-transform-react-jsx node-pty preact preact-router --save-dev

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











