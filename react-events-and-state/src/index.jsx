import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (this.state.isClicked ? <button onClick={this.handleClick}>Thanks!</button> : <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
