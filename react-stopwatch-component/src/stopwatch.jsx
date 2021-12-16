import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.intervalID = null;
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.intervalID = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
    } else {
      clearInterval(this.intervalID);
    }
    this.setState({ isClicked: !this.state.isClicked });
  }

  resetTimer() {
    if (this.state.isClicked === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    // console.log('STATE:', this.state);
    return (
      <div className="stopwatchContainer">
        <div onClick={this.resetTimer} className="stopWatchface">
          <div className="seconds">{this.state.seconds}
          </div>
        </div>
      <i onClick={this.handleClick} className={this.state.isClicked ? 'fas fa-pause' : 'fas fa-play'}></i>
      </div>
    );
  }
}

export default Stopwatch;
