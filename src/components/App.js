import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Chatbot from './Chatbot';
import NavItem from './NavItem';
import ChannelNav from './ChannelNav';
import ConversationNav from './ConversationNav';
import FIXTURES from './Fixtures';
import TerminalComponent from './xterm';
import Module1 from './CourseModules/Module1';
import Module2 from './CourseModules/Module2';
import Module3 from './CourseModules/Module3';
import Module4 from './CourseModules/Module4';
import Module5 from './CourseModules/Module5';
import Module6 from './CourseModules/Module6';
import Home from './Home';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';
import GitCheatSheet from './GitCheatSheet'; // Import GitCheatSheet component
import Loading from './Loading';

export default class App extends Component {
    state = {
        sidebarWidth: '20%',
        selectedModuleId: null,
        isLoading: true, // Add a loading state to the state object
    };

    componentDidMount() {
        // Here you would implement the actual logic to determine when the application has loaded
        // For the sake of example, we're using a timeout to simulate a loading process
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000); // Adjust this timeout as needed for your app's load time
    }

    handleMouseDown = (event) => {
        event.preventDefault();
        const startWidth = this.sidebar.offsetWidth;
        const startX = event.clientX;

        const doDrag = (event) => {
            const newWidth = Math.max(15, Math.min(40, (startWidth + event.clientX - startX) / window.innerWidth * 100));
            this.setState({ sidebarWidth: newWidth + '%' });
        };

        const stopDrag = () => {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        };

        document.documentElement.addEventListener('mousemove', doDrag, false);
        document.documentElement.addEventListener('mouseup', stopDrag, false);
    };

    handleModuleSelect = (moduleId) => {
        this.setState({ selectedModuleId: moduleId });
    };

    render({}, { sidebarWidth, isLoading }) {
        const { headerMenu, feed, conversation } = FIXTURES;

        return (
            <div className="app-skeleton">
                {/* Loading component will show up when isLoading is true and hide when it's false */}
                {isLoading && <Loading />}
                <header className="app-header">
                    <img src="/assets/gitfox.png" alt="Git Fox" className="header-logo" />
                    {headerMenu.map((item, index) => (
                        <NavItem key={index} navItem={item} />
                    ))}
                </header>
                <div className="app-container">
                    <div className="app-a">
                        <ChannelNav activeChannel={feed[0]} channels={FIXTURES.channels} />
                        <ConversationNav conversations={conversation} />
                    </div>
                    <div className="app-main">
                        <Router>
                            <Home path="/" />
                            <ProgressPage path="/progress" />
                            <ProjectPage path="/project" />
                            <AnsiblePage path="/ansible" />
                            <Module1 path="/module/1" />
                            <Module2 path="/module/2" />
                            <Module3 path="/module/3" />
                            <Module4 path="/module/4" />
                            <Module5 path="/module/5" />
                            <Module6 path="/module/6" />
                        </Router>        
                        <TerminalComponent />
                    </div>
                    <div className="app-b" ref={(el) => { this.sidebar = el; }} style={{ width: sidebarWidth }}>
                        <div className="resize-handle" onMouseDown={this.handleMouseDown}></div>
                        <Chatbot />
                    </div>
                </div>
            </div>
        );
    }
}

