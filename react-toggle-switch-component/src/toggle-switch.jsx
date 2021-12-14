import React from 'react';

class Toggleswitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      className: 'toggleContainer'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({
        className: 'toggleContainer on'
      });
    } else {
      this.setState({
        className: 'toggleContainer off'
      });
    }
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    // console.log("state:", this.state);
    return (
      <div className='flex'>
        <div onClick={this.handleClick} className={this.state.className}>
          <div className={this.state.isClicked ? 'circleOn' : 'circle'}></div>
      </div>
      <div>{this.state.isClicked ? 'ON' : 'OFF'}</div>
      </div>
    );
  }
}

export default Toggleswitch;
