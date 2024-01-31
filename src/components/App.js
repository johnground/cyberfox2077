import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
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
import READMEComponent from './READMEComponent';
import Home from './Home';
import ProjectPage from './ProjectPage';
import ProgressPage from './ProgressPage';
import AnsiblePage from './AnsiblePage';
import GitCheatSheet from './GitCheatSheet';
import Loading from './Loading';
import BackgroundControl from './BackgroundControl';
import ProjectDirectoryComponent from './ProjectDirectoryComponent';


export default class App extends Component {
    state = {
        sidebarWidth: '20%',
        selectedModuleId: null,
        isLoading: true,
        showLoading: true,
    };

    onLoadingComplete = () => {
        this.setState({ showLoading: false });
    };

    componentDidMount() {
        const firstLoad = !localStorage.getItem('hasLoadedBefore');
        if (firstLoad) {
            this.setState({ isLoading: true, showLoading: true });
            localStorage.setItem('hasLoadedBefore', 'true');
        } else {
            this.setState({ isLoading: false, showLoading: false });
        }
        
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

    handleRoute = e => {
        if (e.url === '/notfound') {
            route('/', true);
        }
        this.currentUrl = e.url;
    };
        



    render({}, { sidebarWidth, isLoading, showLoading }) {
        const { headerMenu, feed, conversation } = FIXTURES;

        return (
            <div className="app-skeleton">
                {showLoading && <Loading onFadeOutComplete={this.onLoadingComplete} />}
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
                        <Router onChange={this.handleRoute}>
                            <Home path="/" />
                            <ProgressPage path="/progress" />
                            <ProjectDirectoryComponent path="/project" />
                            <ProjectPage path="/projects" />
                            <AnsiblePage path="/ansible" />
                            <Module1 path="/module/1" />
                            <Module2 path="/module/2" />
                            <Module3 path="/module/3" />
                            <Module4 path="/module/4" />
                            <Module5 path="/module/5" />                        
                            <READMEComponent path="/module/6" readmePath="/api/module6-readme" />
                            <READMEComponent path="/readme" />
                            {/* Removed NotFoundPage to handle redirection */}
                        </Router>        
                        <TerminalComponent />
                        <BackgroundControl />
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

