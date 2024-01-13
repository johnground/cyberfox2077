import { h, Component } from 'preact';

class Rain extends Component {
  componentDidMount() {
    this.startMatrixRain();
  }

  startMatrixRain() {
    var c = this.canvasRef;
    var ctx = c.getContext('2d');
    
    c.height = window.innerHeight;
    c.width = this.props.width;

    var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
    matrix = matrix.split('');
  
    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];
    for (var x = 0; x < columns; x++) {
      drops[x] = 1;
    }
  
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, c.width, c.height);
  
      ctx.fillStyle = '#29fdff'; // Blue text
      ctx.font = font_size + 'px arial';
  
      for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
  
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
  
        drops[i]++;
      }
    }
  
    setInterval(draw, 35);
  }

  render() {
    return (
      <canvas ref={(el) => { this.canvasRef = el; }} style={this.props.style}></canvas>
    );
  }
}

export default Rain;
