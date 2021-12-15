import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isOpen: false });
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuContent = this.handleMenuContent.bind(this);
  }

  handleMenuOpen() {
    this.setState({ isOpen: true });
  }

  handleMenuContent() {
    this.setState({ isOpen: false });
  }

  handleMenuClose() {
    return (this.state.isOpen ? '' : 'hidden');
  }

  render() {
    const hidden = this.handleMenuClose();
    // console.log('STATE:', this.state);
    return (
      <div>
        <div onClick={this.handleMenuOpen}className='menuIcon'>
          <i className="fas fa-bars"></i>
        </div>
        <div onClick={this.handleMenuContent} className={`container ${hidden}`}>
          <nav className="menuContent">
            <h2>Menu</h2>
            <a onClick={this.handleMenuContent}> About </a>
            <a onClick={this.handleMenuContent}> Get Started </a>
            <a onClick={this.handleMenuContent}> Sign In </a>
          </nav>
        </div>
      </div>
    );
  }
}
export default AppDrawer;
