import React from 'react';
import ReactDOM from 'react-dom';

class Hotbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, className: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newClicks = this.state.clicks + 1;
    if (this.state.clicks > 18) {
      this.setState({ className: 'white', clicks: newClicks });
    } else if (this.state.clicks > 15) {
      this.setState({ className: 'yellow', clicks: newClicks });
    } else if (this.state.clicks > 12) {
      this.setState({ className: 'orange', clicks: newClicks });
    } else if (this.state.clicks > 9) {
      this.setState({ className: 'red', clicks: newClicks });
    } else if (this.state.clicks > 6) {
      this.setState({ className: 'purple', clicks: newClicks });
    } else if (this.state.clicks > 3) {
      this.setState({ className: 'dark-purple', clicks: newClicks });
    } else {
      this.setState({ clicks: this.state.clicks + 1 });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.className}> Hot Button </button>
    );
  }
}

ReactDOM.render(
  <Hotbutton />,
  document.querySelector('#root')
);
