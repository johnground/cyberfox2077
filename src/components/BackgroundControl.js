import { h, Component } from 'preact';
import '/styles/BackgroundControl.css'; // Ensure the path to your CSS is correct
// Arrays of your video and image filenames
const videoFiles = [
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
    }));
  };

  dimVideo = () => {
    this.setState({
      videoOpacity: this.state.videoOpacity === 1 ? 0.5 : 1 // Toggle between full and half opacity
    });
  };

  playRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideo = videoFiles[randomIndex];
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
      videoElement.src = `/assets/${randomVideo}`;
      videoElement.play();
      this.setState({
        videoVisible: true,
        mediaType: 'video' // Ensure mediaType is set to 'video'
      });
    }
  };


  render() {
    const { videoVisible, videoOpacity, currentMedia, mediaType } = this.state;
    const videoElement = document.getElementById('backgroundVideo');
    
    // Apply styles to video element if it's selected
    if (videoElement && mediaType === 'video') {
      videoElement.style.display = videoVisible ? 'block' : 'none';
      videoElement.style.opacity = videoOpacity;
    }

    return (
      <div className="background-control">
        {/* Existing buttons */}
        <button className="toggle-button" onClick={this.toggleVideo}>
          {videoVisible ? 'Hide Background' : 'Show Background'}
        </button>
        <button className="dim-button" onClick={this.dimVideo}>
          {videoOpacity === 1 ? 'Dim Background' : 'Brighten Background'}
        </button>
        <button className="random-video-button" onClick={this.playRandomVideo}>
          Play Random Video
        </button>
      </div>
    );
  }
}

export default BackgroundControl;

