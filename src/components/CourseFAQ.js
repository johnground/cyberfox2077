// CourseFAQ.js
import { h } from 'preact';
import '/styles/Home.css';

const CourseFAQ = () => {
  return (
    <div className="faq-section">
      <h2>How to Use This Course FAQ</h2>
      
      <h3>CyberFox-2077 Features Overview</h3>
      <dl>
        <dt>Xterminal Access to Docker Running Debian:bullseye</dt>
        <dd>Interactive terminal emulator using xterm.js. Direct access to a Docker environment running Debian:bullseye for practical, hands-on experience.</dd>
        
        <dt>Local Large Language Model (LLM) Chat Interface</dt>
        <dd>Powered by a 4.1GB Mistral model for CPU-driven inference. Chat and instruction retrieval through an Ollama server running as a Docker container. Engaging conversational interface for interactive learning and guidance.</dd>
        
        <dt>Module Content with CyberFox-2077 Story Arc</dt>
        <dd>Educational content delivered on-demand. Integration of Git/GitLab, Ansible, and OpenCTI, woven into an engaging CyberFox-2077 story arc. Each module is designed to be immersive and informative.</dd>

        {/* Add additional FAQs here in similar format */}
      </dl>

      <h3>Cheat Sheets for Git and Docker</h3>
      <p>Handy references for Git and Docker commands and best practices. Easily accessible within the course for quick guidance.</p>

      <h3>Optional Components for Enhanced Accessibility</h3>
      <p>Originally designed on WSL with Docker Desktop. Includes a Virtual Machine running Ubuntu 20.04 and a Guacamole server for HTML5 remote access from a host computer. These options provide flexibility and ease of use across different setups.</p>

      <h3>Alpha Stage Course with Open Feedback</h3>
      <p>The course is in its early Alpha stage and may contain bugs. Feedback is highly encouraged to improve and refine the course experience.</p>

      <h3>Technology Stack and Courseware Details</h3>
      <dl>
        <dt>Dockerfile</dt>
        <dd>Based on node:16-bullseye. Powers the CyberFox-2077 CourseWare, which is developed in Preact JavaScript.</dd>

        <dt>Docker-Compose.yml</dt>
        <dd>Comprises the official Ollama Docker image, CyberFox-2077 Dockerfile, and Nginx Proxy. Facilitates AI integration and streamlined delivery of course content.</dd>

        <dt>Mistral Model</dt>
        <dd>A substantial 4.1GB model, ensuring robust and responsive interactions. Enhances the learning experience through a sophisticated AI interface.</dd>

        <dt>Custom API Interface</dt>
        <dd>Connects the front end of the course to the Ollama server. Ensures seamless integration and communication between the course interface and the LLM.</dd>
      </dl>

      <h3>Single Page Application Using Preact js, CSS, and JS Routing</h3>
      <p>A dynamic and responsive web application for an engaging user experience. Uses modern web technologies for smooth navigation and interactivity.</p>

      <h3>Tips for Using the Course</h3>
      <ul>
        <li>Explore the Terminal: Familiarize yourself with the xterminal for a hands-on experience with Debian:bullseye.</li>
        <li>Interact with the LLM Chat: Use the chat interface to ask questions, get guidance, or understand complex concepts.</li>
        <li>Follow the Story Arc: Engage with the story arc for a more immersive learning experience.</li>
        <li>Refer to Cheat Sheets: Utilize the provided cheat sheets for quick help on Git and Docker commands.</li>
        <li>Experiment with Optional Components: If you have access to WSL or Docker Desktop, try these options for a different experience.</li>
        <li>Provide Feedback: Your insights and suggestions are valuable for improving this early-stage course.</li>
      </ul>
    </div>
  );
};

export default CourseFAQ;
