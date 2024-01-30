import { h, Component } from 'preact';
import '/styles/Loading.css'; // Ensure the path to your CSS file is correct

class Loading extends Component {
    state = {
        loadingProgress: 0,
        isFadingOut: false,
        loadingMessage: 'Initializing CyberFox-2077 Core System...',
        showPasswordPrompt: false,
        password: '',
        isPasswordCorrect: false,
        unlockFadeOut: false
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
        }, 1400); // Adjust the interval to control the speed of the loading
    }

    componentWillUnmount() {
        clearInterval(this.loadingInterval);
    }

    getLoadingMessage(progress) {
        // Define messages for each increment
        const messages = {
            0: "In 2077, the world teeters on the edge of digital oblivion...",
            5: "Governments falter under the assault of Artificial Super Intelligences...",
            10: "Amidst chaos, CyberFox emerges, a beacon in the digital shadows...",
            15: "With System.git, an AI of old world's twilight, an ally is found...",
            20: "Together, they navigate the remnants of a fractured society...",
            25: "Using OpenCTI, charting threats in a world where data is sovereign...",
            30: "In Git, every countermeasure, a stroke of strategy against the tide...",
            35: "GitLab becomes their crucible, forging plans in the heat of cyber warfare...",
            40: "Ansible in hand, they automate defenses, a symphony of code and will...",
            45: "Each challenge, a step towards mastering the art of Netrunning...",
            50: "The digital and physical realms blur, indistinguishable...",
            55: "System.git evolves, a testament to AI's true potential for harmony...",
            60: "Together, they redefine the boundaries of human and machine...",
            65: "The anarchic datascape becomes their domain, a playground of possibilities...",
            70: "With every sync, a victory; with every commit, a history preserved...",
            75: "The essence of their journey, a dance between chaos and order...",
            80: "As the digital dystopia encroaches, their resolve only strengthens...",
            85: "CyberFox 2077, not just a survivor, but a harbinger of the new dawn...",
            90: "From the ashes of the past, a new future is envisioned...",
            95: "On the brink of a new era, they stand, ready to redefine humanity...",
            100: "The saga concludes, a new chapter awaits. Welcome, Netrunner..."
        };
        return messages[progress] || this.state.loadingMessage;
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    verifyPassword = () => {
        if (this.state.password === "masterpassword") {  // Replace with your actual master password
            this.setState({ unlockFadeOut: true });
            setTimeout(() => {
                this.setState({ isPasswordCorrect: true });
                if (this.props.onLoadingComplete) {
                    this.props.onLoadingComplete();
                }
            }, 1000); // Duration of the fade-out animation
        } else {
            alert("Incorrect password!");
        }
    }

    render({}, { loadingProgress, isFadingOut, loadingMessage, showPasswordPrompt, isPasswordCorrect, unlockFadeOut }) {
        if (isPasswordCorrect) {
            return null; // Or transition to the main application content
        }
    
        const fadeOutClass = isFadingOut || unlockFadeOut ? 'fade-out' : '';
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
                    {showPasswordPrompt && !unlockFadeOut &&
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