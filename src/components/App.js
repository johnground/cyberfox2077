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
import READMEComponent from './READMEComponent'; // Make sure this component is correctly implemented
import Home from './Home';
import ProgressPage from './ProgressPage';
import ProjectPage from './ProjectPage';
import AnsiblePage from './AnsiblePage';
import GitCheatSheet from './GitCheatSheet';
import Loading from './Loading';

export default class App extends Component {
    state = {
        sidebarWidth: '20%',
        selectedModuleId: null,
        isLoading: true, // State for initial loading
        showLoading: true, // State to control the display of the Loading component
    };

    onLoadingComplete = () => {
        this.setState({ showLoading: false });
    };

    componentDidMount() {
        // Simulate loading process
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000);
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

        document.documentElement.addEventListener('mousemove', doDrag.bind(this), false);
        document.documentElement.addEventListener('mouseup', stopDrag, false);
    };

    handleModuleSelect = (moduleId) => {
        this.setState({ selectedModuleId: moduleId });
    };

    render({}, { sidebarWidth, isLoading }) {
        const { headerMenu, feed, conversation } = FIXTURES;

        return (
            <div className="app-skeleton">
                {this.state.showLoading && <Loading onFadeOutComplete={this.onLoadingComplete} />}
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
                            <READMEComponent path="/readme" />
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


