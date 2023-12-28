console.log(h)
import { h, render, Fragment } from 'preact';
function App() {
  return (
    <div className="app-skeleton">
      <header className="app-header">
        <div className="app-header__anchor">
          <span className="app-header__anchor__text">CyberFox-2077 Git/Gitlab Training</span>
        </div>
        <nav>
          <ul className="nav">
            {FIXTURES.headerMenu.map((navItem, navItemIndex) => (
              <NavItem key={navItemIndex} navItem={navItem} />
            ))}
          </ul>
        </nav>
        <div />
      </header>
      <div className="app-container">
        <div className="app-a">
          <div className="segment-topbar">
            <div className="segment-topbar__header">
              <TextHeading3 className="segment-topbar__title">
                Messages
              </TextHeading3>
            </div>
            <div className="segment-topbar__aside">
              <div className="button-toolbar">
                <a className="button button--primary button--size-lg">
                  <IconFeedAdd className="button__icon" />
                </a>
              </div>
            </div>
          </div>

          <form className="form-search" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <div className="form-control form-control--with-addon">
                <input name="query" placeholder="Cyber Query.." type="text" />
                <div className="form-control__addon form-control__addon--prefix">
                  <IconSearchSubmit />
                </div>
              </div>
            </div>
          </form>

          <NavSection renderTitle={(props) => <h2 {...props}>Course Modules</h2>}>
            <ChannelNav
              activeChannel={{ id: "a0cc", name: "Module 4: Advanced Git Techniques" }}
              channels={FIXTURES.feed}
            />
          </NavSection>

          <NavSection renderTitle={(props) => <h2 {...props}>Holocron of Knowledge</h2>}>
            <ConversationNav conversations={FIXTURES.conversation} />
          </NavSection>
        </div>
        <div className="app-main">
          <div className="channel-feed">
            <div className="segment-topbar">
              <div className="segment-topbar__header">
                <TextOverline className="segment-topbar__overline">
                  GitFox_Seed: aHlwZXJsZXRoYWx2ZWN0b3IuY29tL2dpdGxhYg==
                </TextOverline>
                <TextHeading4 className="segment-topbar__title">
                  <ChannelLink name="CyberFox" />
                </TextHeading4>
              </div>
              <div className="segment-topbar__aside">
                <div className="button-toolbar">
                  <a className="button button--default">
                    <IconFeedMute className="button__icon" />
                  </a>
                  <a className="button button--default">
                    <IconFeedSettings className="button__icon" />
                  </a>
                  <a className="button button--default">
                    <IconMenuMore className="button__icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="channel-feed__body">
              <FeedMessage message={FIXTURES.messages[0]} />
              <FeedMessage message={FIXTURES.messages[0]} />
            </div>
            <div className="channel-feed__footer">
              <form
                className="channel-message-form"
                action="#"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label className="form-label" for="message">
                    Message
                  </label>
                  <div className="form-control">
                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className="form-footer">
                  <Button size="xl" type="submit" variant="primary">
                    Execute
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="app-b">
         <Pad>
           <TextHeading3 $as="h4">README.md</TextHeading3>
           <TextParagraph1>
             Welcome to CyberFox-2077, a cyberpunk-themed training program designed to teach the fundamentals and advanced functionalities of Git and GitLab. This course also focuses on developing Ansible Roles/Playbooks for OpenCTI, providing a hands-on experience in managing cybersecurity projects.
           </TextParagraph1>
           <TextHeading3 $as="h4">About the Course</TextHeading3>
           <TextParagraph1>
             CyberFox-2077 is a comprehensive training program divided into six modules. Each module is crafted to guide learners through various aspects of Git, GitLab, and Ansible, with a special emphasis on applying these skills to OpenCTI projects.
           </TextParagraph1>
           <TextHeading3 $as="h4">Prerequisites</TextHeading3>
           <ul>
            <li>Basic understanding of command line interfaces and text editors.</li>
            <li>Installation of Git and Docker on your machine.</li>
            <li>(Optional) Access to a GitLab account for hands-on experience.</li>
            <li>A computer capable of running docker containers with at least 12GB of RAM.</li>
           </ul>
           <TextHeading3 $as="h4">Course Modules</TextHeading3>
           <ol>
             <li>
               <strong>Introduction to Version Control and Git</strong>: Understanding the basics of Git and its importance in modern software development.
             </li>
              <li>
               <strong>GitLab Essentials</strong>: Exploring the features of GitLab and how they enhance project collaboration and version control.
             </li>
              <li>
               <strong>Advanced Git Techniques</strong>: Diving deeper into Git to uncover powerful tools and techniques for effective version management.
             </li>
              <li>
               <strong>Ansible and Automation</strong>: Introducing Ansible for automating application deployment and configuration management.
             </li>
              <li>
               <strong>Developing Ansible Roles for OpenCTI</strong>: Hands-on module focused on creating Ansible Roles and Playbooks tailored for OpenCTI.
             </li>
              <li>
               <strong>Beyond Ansible and Git: Master Advanced Deployment Techniques</strong>: This course takes you a step further than the basics. Here, you'll not only deploy an Ansible role from a control node but also delve into the intricacies of integrating it with a sophisticated deployment platform. By adapting your role to this advanced environment, you'll gain hands-on experience with real-world applications, honing your skills to meet the demands of complex system management. Prepare to bridge the gap between theory and practice, emerging with the capability to handle advanced deployment scenarios with confidence.
             </li>
           </ol>
        <TextHeading3 $as="h4">Getting Started</TextHeading3>
         <TextParagraph1>
          To get started with CyberFox-2077, clone this repository and follow the instructions in each module's directory.
         </TextParagraph1>
        </Pad>
       </div>
      </div>
    </div>
  );
}

function NavSection({ children, renderTitle }) {
  return (
    <div className="nav-section">
      <div className="nav-section__header">
        {renderTitle({ className: "nav-section__title" })}
      </div>
      <div className="nav-section__body">{children}</div>
    </div>
  );
}

function FeedMessage({ message }) {
  return (
    <div className="message">
      <div className="message__body">
        <div>
          {
            `
        CyberFox-2077 System Initialization...
-------------------------------------
[OK] Establishing secure connection to CyberFox mainframe... 
[OK] Validating system integrity... 
[OK] Encryption protocols engaged... 
[OK] Booting up ansible-node v2.4.1... 
[OK] Syncing with GitLab repository... 
[OK] Loading advanced deployment platform... 
[OK] Integrating Ansible roles and playbooks... 
[OK] Activating OpenCTI plugins and extensions... 
[OK] Compiling Preact components for Cyber interface... 
[OK] Launching xterm.js terminal emulation... 
[OK] Establishing WebSocket connections... 
[OK] Initiating Docker container orchestration... 
[OK] Setting X11 forwarding for Hyper terminal... 

CyberFox-2077 Operational Status: ONLINE
System is now ready for advanced Git and Ansible operations.
All systems functioning within optimal parameters.

Welcome to CyberFox-2077 Training Program. Prepare for an immersive learning experience.
Type 'help' for assistance or 'begin' to start your journey into the future of version control and automation.`
          }
        </div>
      </div>
      <div className="message__footer">
        <span className="message__authoring">System .Git</span>
        {" - 23:04pm"}
      </div>
    </div>
  );
}

function ChannelNav({ activeChannel = null, channels = [] }) {
  return (
    <ul className="nav">
      {channels.map((channel) => (
        <li className="nav__item">
          <a
            className={`nav__link ${
              activeChannel && activeChannel.id === channel.id
                ? "nav__link--active"
                : ""
            }`}
            href="#"
          >
            <ChannelLink {...channel}>{name}</ChannelLink>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ConversationNav({ activeConversation = null, conversations = [] }) {
  return (
    <ul className="nav">
      {conversations.map((convo) => (
        <li className="nav__item">
          <a
            className={`nav__link ${
              activeConversation && activeConversation.id === convo.id
                ? "nav__link--active"
                : ""
            }`}
            href="#"
          >
            <ConversationLink conversation={convo} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function ChannelLink({ icon, name, unread }) {
  return (
    <span
      className={`channel-link ${
        unread > 0 ? "conversation-link--unread" : ""
      }`}
    >
      <span className="channel-link__icon">#</span>
      <span className="channel-link__element">{name}</span>

      {unread > 0 && (
        <span className="channel-link__element">
          <Badge>{unread}</Badge>
        </span>
      )}
    </span>
  );
}

function ConversationLink({ conversation }) {
  return (
    <span
      className={`conversation-link ${
        conversation.isOnline ? "conversation-link--online" : ""
      } ${conversation.unread > 0 ? "conversation-link--unread" : ""}`}
    >
      {conversation.members && conversation.members.length > 2 ? (
        <span className="conversation-link__icon" />
      ) : (
        <span className="conversation-link__icon" />
      )}

      <span className="conversation-link__element">{conversation.name}</span>

      {conversation.unread > 0 && (
        <span className="conversation-link__element">
          <Badge>{conversation.unread}</Badge>
        </span>
      )}
    </span>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Button({
  children,
  type = "button",
  size = "default",
  variant = "default"
}) {
  return (
    <button
      className={`button ${variant ? `button--${variant}` : ""} ${
        size ? `button--size-${size}` : ""
      }`}
      type={type}
    >
      <span className="button__content">{children}</span>
    </button>
  );
}

function Pad({ children, renderCap = null }) {
  return (
    <div className="pad">
      <div className="pad__body">{children}</div>
    </div>
  );
}

function NavItem({ navItem }) {
  return (
    <li className="nav__item">
      <a
        className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`}
        href="#"
      >
        <span className="nav__link__element">{navItem.text}</span>
        {navItem.notificationCount > 0 && (
          <span className="nav__link__element">
            <Badge>{navItem.notificationCount}</Badge>
          </span>
        )}
      </a>
    </li>
  );
}

function MakeTextBase(classNameDefault, $asDefault) {
  return ({ $as = null, children, className }) => {
    const AsComponent = $as || $asDefault;

    return (
      <AsComponent className={`${classNameDefault} ${className}`}>
        {children}
      </AsComponent>
    );
  };
}

const TextHeading1 = MakeTextBase("text-heading1", "h1");
const TextHeading2 = MakeTextBase("text-heading2", "h2");
const TextHeading3 = MakeTextBase("text-heading3", "h3");
const TextHeading4 = MakeTextBase("text-heading4", "h4");
const TextHeading5 = MakeTextBase("text-heading5", "h5");
const TextHeading6 = MakeTextBase("text-heading6", "h6");
const TextParagraph1 = MakeTextBase("text-paragraph1", "p");
const TextOverline = MakeTextBase("segment-topbar__overline", "span");

function MakeIcon(svg) {
  return ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {svg}
    </svg>
  );
}

const IconFeedMute = MakeIcon(
  <path d="M18 9.5c2.481 0 4.5 1.571 4.5 3.503 0 1.674-1.703 3.48-4.454 3.48-.899 0-1.454-.156-2.281-.357-.584.358-.679.445-1.339.686.127-.646.101-.924.081-1.56-.583-.697-1.007-1.241-1.007-2.249 0-1.932 2.019-3.503 4.5-3.503zm0-1.5c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003zm-.668 6.5h-1.719v-.369l.938-1.361v-.008h-.869v-.512h1.618v.396l-.918 1.341v.008h.95v.505zm3.035 0h-2.392v-.505l1.306-1.784v-.011h-1.283v-.7h2.25v.538l-1.203 1.755v.012h1.322v.695zm-10.338 9.5c1.578 0 2.971-1.402 2.971-3h-6c0 1.598 1.45 3 3.029 3zm.918-7.655c-.615-1.001-.947-2.159-.947-3.342 0-3.018 2.197-5.589 5.261-6.571-.472-1.025-1.123-1.905-2.124-2.486-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.173-.939-2.123-2.097-2.123s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h9.782c.425-.834.931-1.764 1.165-2.655zm-.947-15.345c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1z" />
);

const IconFeedSettings = MakeIcon(
  <path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z" />
);

const IconMenuMore = MakeIcon(
  <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
);

const IconFeedAdd = MakeIcon(
  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
);

const IconSearchSubmit = MakeIcon(
  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
);

const IconShop = MakeIcon(
  <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
);

const FIXTURES = {
  headerMenu: [
    { notificationCount: 0, text: "CyberFox-2077 Home" },
    { isActive: true, notificationCount: 11, text: "Progress" },
    { notificationCount: 0, text: "Project" },
    { notificationCount: 0, text: "Ansible" },
    { notificationCount: 0, text: "Files" }
  ],
  feed: [
    { id: "5ba5", name: "Module 1: Introduction to Version Control and Git", unread: 5 },
    { id: "4f22", name: "Module 2: GitLab Essentials", unread: 6 },
    { id: "fee9", name: "Module 3: Advanced Git Techniques", unread: 4 },
    { id: "a0cc", name: "Module 4: Ansible and Automation", unread: 7 },
    { id: "a0df", name: "Module 5: Developing Ansible Roles for OpenCTI", unread: 6 },
    { id: "dee3", name: "Module 6: Beyond Ansible and Git", isPrivate: true, unread: 5 }
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
  messages: [
    {
      id: "fd0cf",
      content: "fubar", // Provide a valid value for the content property
      dateTime: "2077-10-09T11:04:57Z",
      author: {
        id: "d12c",
        name: "System.Git"
      }
    }
  ]
};

render(<App />, document.getElementById("root"));