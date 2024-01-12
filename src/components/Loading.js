import { h, Component } from 'preact';
import '/styles/Loading.css'; // Make sure the path to your CSS file is correct

class Loading extends Component {
  render() {
    return (
      <div class="container">
        <div id='loader'>
          <div id='title' class='flex'>
            <p class='loading-text'>LOADING</p>
            <div class='therefore'>∴</div>
            <p class="loading-number">%</p>
          </div>
          <div id='loading-bar-border'>
            <div class='loading-bar'></div>
          </div>
          <div id='warning'>
            <p>
              <div class='exclamation'>!</div>
              &nbsp CAUTION, Do not turn off.
            </p>
          <div id='line-cascades'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
