import { h, Component } from 'preact';
import '/styles/BackgroundControl.css'; // Ensure the path to your CSS is correct

// Arrays of your video and image filenames
const videoFiles = [
  'cyberfox2077.mp4',
  'redcyberfox.mp4',
  'redcyberfox1.mp4',
  'redcyberfox2.mp4',
  'redcyberfox3.mp4',
  'redcyberfox4.mp4',
  'redcyberfox5.mp4',
  'redcyberfox6.mp4',
  'purplefox.mp4',
  // ... other video files
];

const imageFiles = [
  'GPTFOX.png',
  'GitPunkFox.png',
  'PCB.png',
  'crackling.png',
  'discordfox.png',
  'gitfox.png',
  'gitfoxcyber.png',
  'ninjafox.png',
  'pinkfox.png',
  'purplefox.png',
  'redcyberfox.png',
  'technofox.png',
  // ... other image files
];

class BackgroundControl extends Component {
  state = {
    videoVisible: true,
    videoOpacity: 1, // Full opacity
    currentMedia: '',
    mediaType: 'video', // Start with 'video' as default
  };

  toggleVideo = () => {
    this.setState(prevState => ({
      videoVisible: !prevState.videoVisible
    }), () => {
      const videoElement = document.getElementById('backgroundVideo');
      if (videoElement) {
        videoElement.style.display = this.state.videoVisible ? 'block' : 'none';
      }
    });
  };

  dimVideo = () => {
    this.setState({
      videoOpacity: this.state.videoOpacity === 1 ? 0.5 : 1 // Toggle between full and half opacity
    }, () => {
      const videoElement = document.getElementById('backgroundVideo');
      if (videoElement) {
        videoElement.style.opacity = this.state.videoOpacity;
      }
    });
  };

  playRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideo = videoFiles[randomIndex];
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
      videoElement.src = `/assets/${randomVideo}`; // Ensure the path is correct
      videoElement.play();
      this.setState({
        currentMedia: randomVideo,
        mediaType: 'video'
      });
    }
  };

  renderSwitch = (label, action, isActive) => {
    return (
      <div className="switch-container" onClick={action}>
        <div className={`switch ${isActive ? 'switch--active' : ''}`}>
          <div className="switch__handle"></div>
        </div>
        <span className="switch-label">{label}</span>
      </div>
    );
  };

  renderControl = (label, action) => {
    // This method is used for actions that are not toggles, such as the "Random Background" button
    return (
      <div className="button-container" onClick={action}>
        <button className="button">{label}</button>
      </div>
    );
  };

  render() {
    const { videoVisible, videoOpacity } = this.state;

    return (
      <div className="background-control">
        {this.renderSwitch('Toggle Background', this.toggleVideo, videoVisible)}
        {this.renderSwitch('Dim Background', this.dimVideo, videoOpacity < 1)}
        {this.renderControl('Random Background', this.playRandomVideo)} {/* Updated label */}
      </div>
    );
  }
}

export default BackgroundControl;
