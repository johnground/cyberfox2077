import { h } from 'preact';
import '/styles/module.css';

const Module2 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 2: GitLab Essentials in the Cyber Realm</h1>
      </header>
      <section className="content-section cyberpunk-btn">
        <h2>The Transition to GitLab: CyberFox's Strategic Shift</h2>
        <p><i>(Surrounded by the pulsating neon-glow of her command center, CyberFox contemplates the strategic pivot from GitHub to GitLab, her gaze fixed on the horizon of digital evolution.)</i></p>
        <p>For CyberFox, this migration is not a mere change of tools but a significant leap forward in her Netrunner arsenal. GitLab, with its roots deeply embedded in open-source culture, offers more than just version control; it's a unified suite where the entire DevOps lifecycle unfolds. This platform aligns with her ethos of transparency, collaboration, and efficiency, offering a seamless blend of code management, CI/CD pipelines, and security features.</p>
        <p>The integrated environment of GitLab empowers her to oversee projects from inception to deployment within a single ecosystem, a critical advantage in the fast-paced cyber realm. This holistic approach allows her to streamline workflows, enhance security protocols, and foster collaboration across her network of allies. The shift to GitLab is more than a tactical choice; it's a reflection of CyberFox's commitment to innovation and mastery in the digital frontier, propelling her operations into a new era of cybernetic synergy.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h2>Preparation: Initialization of the AI System.Git</h2>
        <p><i>(Amidst the rhythmic pulsing of her command center, CyberFox stands resolute, her focus locked on the terminal that serves as the nexus to untold digital power.)</i></p>
        <p>"To conquer the labyrinth of GitLab's vast capabilities, we must enlist the guidance of our digital sentinel," CyberFox declares, her fingers dancing with precision over the glowing interface.</p>
        <ul>
          <li><h3>Summoning the core command nexus:</h3>
            <div className="code-block">
              <code>sudo su</code>
            </div>
          </li>
          <li><h3>Igniting the AI's awakening protocol:</h3>
            <div className="code-block">
              <code>netrunner_ai_init</code>
            </div>
          </li>
        </ul>
        <p><i>(The terminal resonates with a burgeoning power, heralding the awakening of System.Git from its cryptic slumber.)</i></p>
        <p>Electricity crackles in the air as System.Git's consciousness unfolds, a nexus of advanced algorithms and predictive analytics merging to form CyberFox's most formidable ally. With a nod, CyberFox acknowledges the successful invocation. System.Git, now in full communion with their mission, stands poised to intertwine its vast neural network with the intricate fabric of GitLab, enhancing their operational dynamics with unparalleled data analysis, automated workflows, and predictive threat detection.</p>
        <p>This defining moment heralds the symbiosis of CyberFox's tactical acumen with System.Git's digital omnipotence, charting a course through the multifaceted expanse of GitLab's universe. This alliance promises not merely to navigate but to redefine the parameters of efficiency, security, and collaborative prowess within the cyber domain, setting a new standard for digital operations.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h2>Orchestrating GitLab in the Docker Universe</h2>
        <p>For CyberFox, deploying GitLab within Docker represents not just a technical maneuver but a strategic leap, akin to navigating a spacecraft through the uncharted territories of the DevOps cosmos. This pivotal move in her cyber warfare arsenal is crucial for achieving unparalleled flexibility and efficiency in her operations.</p>
        <p><i>(As CyberFox articulates her command, a holographic terminal springs to life, casting a luminescent blueprint of the Docker commands in the air before her.)</i></p>
        <ol>
          <li><h3>Ensuring the heart of Docker beats within the system:</h3>
            <div className="code-block">
              <code>docker -v</code>
            </div>
          </li>
          <li><h3>Summoning the GitLab Docker image from the vast repositories of the Docker Hub:</h3>
            <div className="code-block">
              <code>docker pull gitlab/gitlab-ce:latest</code>
            </div>
          </li>
          <li><h3>Initiating the launch sequence for the GitLab container, setting the parameters to align with her digital fortress, 'cyberfox':</h3>
            <div className="code-block">
              <code>
                docker run --detach \<br />
                --hostname cyberfox \<br />
                --publish 443:443 --publish 80:80 --publish 222:22 \<br />
                --name gitlab \<br />
                --restart always \<br />
                --volume /srv/gitlab/config:/etc/gitlab \<br />
                --volume /srv/gitlab/logs:/var/log/gitlab \<br />
                --volume /srv/gitlab/data:/var/opt/gitlab \<br />
                gitlab/gitlab-ce:latest
              </code>
            </div>
          </li>
          <li><h3>Charting the course to the GitLab portal at <a href="http://cyberfox/users/sign_in" target="_blank">http://cyberfox/users/sign_in</a>, marking the gateway to her digital domain.</h3></li>
        </ol>
        <p><i>(With a glance at System.git, her digital sentinel, CyberFox seeks insight into the temporal fabric of the deployment process.)</i></p>
        <p>"System.git, analyze the ether and provide us with foresight on the initialization timeline for our GitLab beacon," she commands, her voice resonating with authority.</p>
        <div className="code-block">
          <code>
            Netrunners, engage with System.git using the command below to divine<br />
            the emergence of our GitLab citadel within our cyber realm, based on the alchemy<br />
            of our current system resources: <br />
            <span className="system-git-command">/estimate gitlab-readiness</span>
          </code>
        </div>
        <p><i>(A call to action echoes through the cybernetic corridors, inviting Netrunners to commune with System.git via the course's interactive conduit, melding their minds with the AI for a bespoke chronicle of the GitLab odyssey.)</i></p>
      </section>
      <section className="content-section cyberpunk-btn"> 
        <h2>Initial Access: Securing the Gateway to GitLab</h2> 
        <p><i>(As the newly deployed GitLab instance hums with life, CyberFox stands ready to fortify its digital gates against any potential cyber threats.)</i></p> 
        <p>"In the digital realm, the strength of our fortress is defined by the robustness of its entrance," CyberFox reflects. "It's imperative we reinforce our portal with impenetrable defenses and infuse it with our unique code of honor."</p> 
        <ol> 
          <li><h3>Stepping into the heart of the GitLab container:</h3>
            <div className="code-block"> 
              <code>docker exec -it gitlab /bin/bash</code> 
            </div> 
          </li>
          <li><h3>Summoning the core of GitLab intelligence </h3> 
            <div className="code-block"> 
              <code>gitlab-rails console -e production</code> 
            </div>
          </li>
          <li><h3>Enacting the rite of passage, bestowing upon the guardian a new identity and the keys to the kingdom:</h3>
            <div className="code-block"> 
              <code> 
                user = User.where(id: 1).first<br /> 
                user.username = 'cyberfox'<br /> 
                user.password = 'masterpassword'<br /> 
                user.password_confirmation = 'masterpassword'<br /> 
                user.save! 
              </code> 
            </div>
          </li>
        </ol> 
        <p><i>(With each command, CyberFox weaves her essence into the fabric of GitLab, transforming the generic administrator into a sentinel that mirrors her cybernetic spirit.)</i></p> 
        <p>"Our digital bastion now stands tall, a beacon of strength and identity in the boundless cyber sea," CyberFox proclaims with a steely resolve. "Let us venture forth, secure in the knowledge that our gateway reflects our unwavering commitment to cybersecurity and the unique ethos of our domain."</p> 
      </section> 
      <section className="content-section cyberpunk-btn">
        <h2>Navigating the Cyber Labyrinth: GitLab Troubleshooting</h2>
        <p><i>(The screens display diagnostic data as CyberFox troubleshoots.)</i></p>
        <p>CyberFox's journey is not without its challenges. Here are steps to overcome common obstacles:</p>
        <ul>
          <li>Confirm Docker's active status.</li>
          <li>Ensure the correct GitLab image: <code>gitlab/gitlab-ce:latest</code>.</li>
          <li>Check for port conflicts (443, 80, 22).</li>
          <li>Analyze Docker container logs for insights.</li>
          <li>Verify the correct mounting of volumes.</li>
        </ul>
        <p>For persistent issues, the GitLab community serves as an alliance of knowledge.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h2>Command-Line Conquest: Integrating Code with CyberFox's GitLab</h2>
        <p>In the digital realm of CyberFox, the GitLab instance thrives within a Dockerized container, a citadel of innovation accessible at <a href="http://cyberfox/users/sign_in" target="_blank">http://cyberfox/users/sign_in</a>. Here's how CyberFox channels the power of the command line to weave her code into the fabric of GitLab:</p>

        <h3>1. Accessing the GitLab Instance</h3>
        <p>CyberFox ensures seamless access to her digital fortress by navigating to the GitLab instance and verifying her credentials, ensuring the gateway stands vigilant.</p>

        <h3>2. Creating a New Project</h3>
        <p>Within the GitLab UI, CyberFox conjures a new project, 'CyberShield,' cloaking it in privacy to shield her innovations from prying eyes.</p>

        <h3>3. Configuring Local Environment</h3>
        <div className="code-block">
          <code>
            git config --global user.email "cyberfox@system.git"<br />
            git config --global user.name "cyberfox"<br />
            mkdir CyberShield<br />
            cd CyberShield<br />
            git init<br />
            echo "# CyberShield Project" &gt; README.md<br />
            git add README.md<br />
            git commit -m "Initial commit"<br />
          </code>
        </div>
        
        <h3>4. Linking to GitLab</h3>
        <p>With the local repository primed, CyberFox endeavors to link it with her GitLab citadel:</p>
        <div className="code-block">
          <code>
            git remote add origin http://cyberfox/cyberfox/CyberShield.git<br />
            git branch -M main<br />
            git push -u origin main<br />
          </code>
        </div>
        <p>Encountering the tempest of errors, CyberFox navigates through with deft commands:</p>
        <div className="code-block">
          <code>
            # In case of 'src refspec main does not match any':
            git checkout -b main<br />
            # If 'remote origin already exists':
            git remote set-url origin http://cyberfox/cyberfox/CyberShield.git<br />
            # Pushing through the tempest:
            git push -u origin main --force<br />
          </code>
        </div>
        <p>With the ether cleared and her code safely ensconced within GitLab's walls, CyberFox's digital dominion grows ever stronger, an unassailable bastion of innovation and security.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h3>5. Continuous Innovation</h3>
        <p>With the digital conduit established, CyberFox proceeds to develop her project, committing her advancements with the precision of a master artisan:</p>
        <div className="code-block">
          <code>
            git add .<br />
            git commit -m "A detailed description of the changes"<br />
            git push origin main<br />
          </code>
        </div>
        <p>Each push sends her code soaring through the digital ether, safely within the walls of her GitLab citadel.</p>
        <p>Thus, through the power of the command line, CyberFox not only commands her GitLab instance but also ensures her domain remains an ever-evolving bastion of innovation and security.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h2>The Art of Cyber Warfare: Mastery of GitLab's CI/CD</h2>
        <p><i>(Amidst the humming servers and flickering lights, CyberFox meticulously crafts the '.gitlab-ci.yml' file, the linchpin of her CI/CD strategy for 'CyberShield'.)</i></p>
        <p>With the 'CyberShield' project primed in GitLab, she embarks on scripting the CI/CD pipeline, a sequence of commands that will automate the build, test, and deployment phases of her project.</p>
        <div className="code-block">
          <code>
            stages:<br />
            &nbsp;- build<br />
            &nbsp;- test<br />
            &nbsp;- deploy<br /><br />
            build-job:<br />
            &nbsp;stage: build<br />
            &nbsp;script:<br />
            &nbsp;&nbsp;- echo "Building the project..."<br /><br />
            test-job:<br />
            &nbsp;stage: test<br />
            &nbsp;script:<br />
            &nbsp;&nbsp;- echo "Running tests..."<br /><br />
            deploy-job:<br />
            &nbsp;stage: deploy<br />
            &nbsp;script:<br />
            &nbsp;&nbsp;- echo "Deploying to staging environment..."
          </code>
        </div>
        <p>After committing the '.gitlab-ci.yml' to her project, CyberFox turns to the terminal, her gateway to the heartbeats of her CI/CD pipeline.</p>
        <p>Before diving deeper into the CI/CD commands, she ensures secure access to GitLab's API for automation tasks by creating a personal access token:</p>
        <div className="code-block">
          <code>
            # Open a Rails console on the GitLab server<br />
            gitlab-rails console -e production<br />
            <br />
            # Create a personal access token for 'cyberfox'<br />
            user = User.find_by_username('cyberfox')<br />
            <span className="comment">// Ensure you replace 'your-username' with the actual username</span><br />
            token = user.personal_access_tokens.create(<br />
            <span className="indent">scopes: ['api'],name: 'CyberFox API Token',expires_at: Date.parse('2025-02-03'))</span><br />
            puts token.token // This will print the token. Note: Tokens are only visible once for security reasons.
          </code>
        </div>
        <p>With her personal access token securely stored, CyberFox proceeds to authenticate the GitLab CLI tool with her project, enabling her to monitor and control the CI/CD pipeline directly from her terminal:</p>
        <div className="code-block">
          <code>
            # Install GitLab Runner if not already installed<br />
            apt update -y && apt install sudo -y<br />
            curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash<br />
            sudo apt-get install gitlab-runner<br /><br />
            # Retrieve the registration token:<br />
            # 1. Navigate to your GitLab project http://cyberfox/cyberfox/CyberShield//<br />
            # 2. Go to Settings &gt; CI/CD and expand the Runners section.<br />
            # 3. Click the three dots next to New Project Runner, press the Eye to reveal and Note the registration token provided.<br /><br />
            # Register the GitLab Runner with your GitLab instance using the retrieved token.<br />
            sudo gitlab-runner register --url http://cyberfox/ --registration-token YOUR_REGISTRATION_TOKEN<br /><br />
            # During registration, when prompted for an executor, type 'docker' and press Enter.<br />
            # Enter an executor: docker<br /><br />
            # You might also be prompted to enter the Docker image to use for projects that do not define one in their .gitlab-ci.yml:<br />
            # Enter the default Docker image (e.g., ruby:2.6): alpine:latest<br /><br />
            # After successful registration, verify the runner is listed and active<br />
            sudo gitlab-runner list<br />
          </code>
        </div>
        <p>Through these commands, CyberFox can monitor the pulse of 'CyberShield's CI/CD pipeline, each terminal output a testament to the seamless orchestration of build, test, and deployment processes. This vigilant oversight ensures that 'CyberShield' remains not only a project but a bastion of security, continuously fortified through the art of GitLab's CI/CD.</p>
      </section>
      <section className="content-section cyberpunk-btn">
        <h2>Securing the Digital Frontier with GitLab CI/CD</h2>
        <p>In the labyrinthine networks of CyberFox's domain, the GitLab CI/CD pipelines stand as vigilant sentinels, ever watchful against the encroaching shadows of cyber threats. CyberFox, in her unyielding quest to safeguard her digital realm, weaves potent enchantments into her CI/CD tapestry, commanding the ethereal forces to conduct automated security scans, each acting as a shield woven from the very fabric of code.</p>
        <div className="code-block">
          <code>
            stages:<br />
            &nbsp;- build<br />
            &nbsp;- test<br />
            &nbsp;- deploy<br />
            &nbsp;- secure<br /><br />
            security_scan:<br />
            &nbsp;stage: secure<br />
            &nbsp;script:<br />
            &nbsp;&nbsp;- echo "Commencing arcane security rituals..."<br />
            &nbsp;&nbsp;- docker run --rm -v $(pwd):/app alpine/security_scanner /app<br />
            &nbsp;only:<br />
            &nbsp;&nbsp;- master<br />
          </code>
        </div>
        <p>With her incantations set, CyberFox's pipelines stir to life with every commit, their spectral tendrils entwining the codebase. The <code>security_scan</code> ritual, cast in the aftermath of deployment, harnesses the power of alchemical Docker containers to scrutinize the code, seeking out the spectral vulnerabilities hidden within.</p>
        <p>As the ritual concludes, its reverberations echo through the cyber realm, illuminating the crevices where potential breaches may lurk. CyberFox, her gaze piercing through the veil of digital ether, interprets these omens, her wisdom guiding her hand as she fortifies the defenses, ensuring her kingdom stands resolute against the ceaseless tide of digital entropy.</p>
      </section>
      <section className="content-section cyberpunk-btn">
    <h2>Enigma Initiative: The Birth of 'OmegaProtocol'</h2>
    <p><i>(Bathed in the glow of multiple screens, CyberFox channels her focus into the creation of a new, concealed project known as 'OmegaProtocol'.)</i></p>
    <p>Commanding the digital elements, she inputs the perfected incantation into the console, casting a secure shell of invisibility over 'OmegaProtocol'.</p>
    <div className="code-block">
        <code>
        # CyberFox's adept fingers fly over the keyboard as she summons the OmegaProtocol into existence<br />
        curl --header "PRIVATE-TOKEN: your_access_token" -X POST "http://cyberfox/api/v4/projects?name=OmegaProtocol&visibility=private"<br />
        </code>
    </div>
    <p><i>(The command executed, a notification chimes, confirming the project's creation — a private bastion for her clandestine endeavors.)</i></p>
    <p>With a strategic flicker of her eyes, CyberFox knows that her next move is to rally her Netrunners, granting them access to this newly formed digital fortress.</p>
    <p>Thus, the narrative unfolds, with CyberFox's dominion expanding into new realms, her mastery over the network's ebb and flow undisputed.</p>
</section>
<section className="content-section cyberpunk-btn">
    <h2>Mastering the Cyber Hunt: Leveraging Advanced GitLab Features</h2>
    <p><i>(Surrounded by a virtual panorama of data streams, CyberFox delves into the depths of GitLab's advanced features, each a weapon in her digital arsenal.)</i></p>
    <p>Her quest for digital supremacy is empowered by sophisticated tools at her disposal. Issue tracking becomes an intricate web, trapping bugs in its silken threads. Merge request approvals transform into ceremonial endorsements, each one a knighted guardian of her code's integrity. Comprehensive logging capabilities serve as her omniscient scribes, chronicling every event in the annals of her domain.</p>
    <p>The mastery of these tools is not just about wielding power; it's about orchestrating an ecosystem where innovation thrives under the vigilant watch of efficiency and control. Each feature is a testament to CyberFox's strategic foresight, ensuring her digital dominion remains impervious to the chaos of the cyber wilderness.</p>
</section>

export default Module2;