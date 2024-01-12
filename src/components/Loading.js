import { h, Component } from 'preact';
import '/styles/Loading.css'; // Ensure the path to your CSS file is correct

class Loading extends Component {
    state = {
        loadingProgress: 0,
        isFadingOut: false,
        loadingMessage: 'Initializing CyberFox-2077 Core System...',
        showPasswordPrompt: false,
        password: '',
        isPasswordCorrect: false
    };

    componentDidMount() {
        this.loadingInterval = setInterval(() => {
            this.setState(prevState => {
                const newLoadingProgress = prevState.loadingProgress + 1;
                const newLoadingMessage = this.getLoadingMessage(newLoadingProgress);

                if (newLoadingProgress >= 100) {
                    clearInterval(this.loadingInterval);
                    this.setState({ showPasswordPrompt: true });
                }

                return {
                    loadingProgress: newLoadingProgress,
                    loadingMessage: newLoadingMessage
                };
            });
        }, 100); // Adjust the interval to control the speed of the loading
    }

    componentWillUnmount() {
        clearInterval(this.loadingInterval);
    }

    getLoadingMessage(progress) {
        // Define messages for each increment
        const messages = {
            0: "Initializing CyberFox-2077 Core System...",
            5: "Decrypting Cybernetic Protocols... 5%",
            10: "Compiling Git.sys Manifest... 10%",
            15: "Injecting Netrunners' Codebase... 15%",
            20: "Calibrating Neural Network Interfaces... 20%",
            25: "Synthesizing GitLab Repositories... 25%",
            30: "Rerouting Data Through Quantum Subnet... 30%",
            35: "Enhancing Cyberfox-2077 Algorithms... 35%",
            40: "Cross-Compiling Cyberware Modules... 40%",
            45: "Charging Cyberdeck Capacitors... 45%",
            50: "Launching Git Repositories Sync... 50%",
            55: "Integrating GitLab CI/CD Pipelines... 55%",
            60: "Activating Advanced Cybernetic HUD... 60%",
            65: "Initiating Neural Uplink Encryption... 65%",
            70: "Establishing Secure GitLab Connection... 70%",
            75: "Calibrating Version Control Timelines... 75%",
            80: "Loading Arasaka Security Protocols... 80%",
            85: "Finalizing Cyberfox-2077 Enhancements... 85%",
            90: "Sequencing Cybergenic Kernel... 90%",
            95: "Completing GitLab Ultimate Deployment... 95%",
            99: "CyberFox-2077 Ready. Welcome, Netrunner... 100%",
            100: "Initialization complete. Starting application . . ."
        };
        return messages[progress] || this.state.loadingMessage;
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    verifyPassword = () => {
        // Assuming 'masterpassword' is the correct password
        if (this.state.password === "masterpassword") {
            this.setState({ isPasswordCorrect: true });
            setTimeout(() => {
                if (this.props.onLoadingComplete) {
                    this.props.onLoadingComplete();
                }
            }, 1000); // Fade out transition
        } else {
            alert("Incorrect password!");
        }
    }

    render({}, { loadingProgress, isFadingOut, loadingMessage, showPasswordPrompt, isPasswordCorrect }) {
        if (isPasswordCorrect) {
            return null; // Transition to the next screen or component
        }

        const fadeOutClass = isFadingOut ? 'fade-out' : '';
        return (
            <div class={`container ${fadeOutClass}`}>
                <div id='loader'>
                    <div id='title' class='flex'>
                        <p class='loading-text'>{loadingMessage}</p>
                        <div class='therefore'>∴</div>
                        <p class="loading-number">{loadingProgress}%</p>
                    </div>
                    <div id='loading-bar-border'>
                        <div class='loading-bar' style={{ width: `${loadingProgress}%` }}></div>
                    </div>
                    <div id='warning'>
                        <p>
                            <div class='exclamation'>!</div>
                            &nbsp;CAUTION, Do not turn off.
                        </p>
                    </div>
                    {showPasswordPrompt &&
                        <div class="password-prompt">
                            <div class="password-content">
                                <h2>ACCESS SYSTEM.GIT</h2>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    placeholder="Enter Master Password"
                                />
                                <button onClick={this.verifyPassword}>Hack In</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Loading;
